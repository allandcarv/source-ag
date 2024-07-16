import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteUserFromCultivation } from '../core/services/api';
import type { User } from '../interfaces/user';

export const useDeleteCultivationUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      cultivationId,
    }: {
      userId: number;
      cultivationId: string;
    }) => deleteUserFromCultivation(userId, cultivationId),
    onMutate: async ({ cultivationId }) => {
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
    onError: (_err, { cultivationId }, context) => {
      queryClient.setQueryData<User[]>(
        ['cultivations', cultivationId, 'users'],
        context?.previousCultivationUsers
      );
    },
    onSuccess: (_data, { userId, cultivationId }) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => previous.filter((user) => user.id !== userId)
      );
    },
    onSettled: (_data, _error, { cultivationId }) =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });
};
