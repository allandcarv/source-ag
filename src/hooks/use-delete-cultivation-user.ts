import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

import { deleteUserFromCultivation } from '../core/services/api';
import type { User } from '../interfaces/cultivation-user-dto';

export const useDeleteCultivationUser = () => {
  const { cultivationId } = useParams({ strict: false });
  const queryClient = useQueryClient();

  if (!cultivationId) {
    throw new Error('Error getting cultivation id');
  }

  const { mutate } = useMutation({
    mutationFn: (userId: number) =>
      deleteUserFromCultivation(userId, cultivationId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      });

      const previousCultivationUsers = queryClient.getQueryData<User[]>([
        'cultivations',
        cultivationId,
        'users',
      ]);

      return { previousCultivationUsers };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData<User[]>(
        ['cultivations', cultivationId, 'users'],
        context?.previousCultivationUsers
      );
    },
    onSuccess: (_, userId) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => previous.filter((user) => user.id !== userId)
      );
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });

  return {
    deleteCultivationUser: mutate,
  };
};
