import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

import { updateUserRole } from '../core/services/api';
import type { CultivationUserUpdateRoleBody } from '../interfaces/cultivation-user-dto';
import { parseUserData } from '../core/utils/parse-user-data';
import type { User } from '../interfaces/user';

export const useUpdateCultivationUserRole = () => {
  const { cultivationId } = useParams({ strict: false });
  const queryClient = useQueryClient();

  if (!cultivationId) {
    throw new Error('Error getting cultivation id');
  }

  const mutation = useMutation({
    mutationFn: ({ userId, roleId }: { userId: number; roleId: number }) => {
      const body: CultivationUserUpdateRoleBody = {
        role: {
          id: roleId,
        },
      };

      return updateUserRole(body, cultivationId, userId);
    },
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
    onSuccess: (newUser) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => [...previous, parseUserData(newUser)]
      );
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });

  return {
    updateCultivationUserRole: mutation.mutate,
  };
};
