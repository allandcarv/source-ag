import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

import { postUserToCultivation } from '../core/services/api';
import type {
  CultivationUserRequestBody,
  User,
} from '../interfaces/cultivation-user-dto';
import { parseUserData } from '../core/utils/parse-user-data';
import { useGetRoles } from './use-get-roles';

export const usePostCultivationUser = () => {
  const { cultivationId } = useParams({ strict: false });
  const queryClient = useQueryClient();
  const { data } = useGetRoles();

  if (!cultivationId) {
    throw new Error('Error getting cultivation id');
  }

  const { mutate, status } = useMutation({
    mutationFn: (userIds: number[]) => {
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
    onSuccess: (newUsers) => {
      queryClient.setQueryData(
        ['cultivations', cultivationId, 'users'],
        (previous: User[]) => [
          ...previous,
          ...newUsers.map((newUser) => parseUserData(newUser)),
        ]
      );
    },
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['cultivations', cultivationId, 'users'],
      }),
  });

  return {
    createCultivationUser: mutate,
    status,
  };
};
