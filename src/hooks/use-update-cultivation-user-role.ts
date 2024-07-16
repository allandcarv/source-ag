import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateUserRole } from '../core/services/api';
import type { CultivationUserUpdateRoleBody } from '../interfaces/cultivation-user-dto';
import { parseUserData } from '../core/utils/parse-user-data';
import type { User } from '../interfaces/user';

export const useUpdateCultivationUserRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      cultivationId,
      userId,
      roleId,
    }: {
      cultivationId: string;
      userId: number;
      roleId: number;
    }) => {
      const body: CultivationUserUpdateRoleBody = {
        role: {
          id: roleId,
        },
      };

      return updateUserRole(body, cultivationId, userId);
    },
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
    onSuccess: (newUser, { cultivationId }) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => [...previous, parseUserData(newUser)]
      );
    },
    onSettled: (_data, _error, { cultivationId }) =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });
};
