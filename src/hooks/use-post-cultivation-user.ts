import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postUserToCultivation } from '../core/services/api';
import type { CultivationUserRequestBody } from '../interfaces/cultivation-user-dto';
import { parseUserData } from '../core/utils/parse-user-data';
import { useGetRoles } from './use-get-roles';
import type { User } from '../interfaces/user';

export const usePostCultivationUser = () => {
  const queryClient = useQueryClient();
  const { data } = useGetRoles();

  return useMutation({
    mutationFn: ({
      cultivationId,
      userIds,
    }: {
      userIds: number[];
      cultivationId: string;
    }) => {
      const role = data?.find((role) => role.name.toLowerCase() === 'observer');

      const bodies: CultivationUserRequestBody[] = userIds.map((userId) => ({
        role: {
          id: role?.id ?? 2,
        },
        user: {
          id: userId,
        },
      }));

      return Promise.all(
        bodies.map((body) => postUserToCultivation(body, cultivationId))
      );
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
    onSuccess: (newUsers, { cultivationId }) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => [
          ...previous,
          ...newUsers.map((newUser) => parseUserData(newUser)),
        ]
      );
    },
    onSettled: (_data, _error, { cultivationId }) =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });
};
