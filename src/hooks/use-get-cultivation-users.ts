import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

import { getCultivationUsers } from '../core/services/api';
import type { CultivationUserDTO } from '../interfaces/cultivation-user-dto';
import { isNumber } from '../core/utils/is-number';
import { useGetUsers } from './use-get-users';
import type { User } from '../interfaces/user';
import { sanitizeUserData } from '../core/utils/sanitize-user-data';
import { parseUserData } from '../core/utils/parse-user-data';

export const useGetCultivationUsers = () => {
  const { cultivationId } = useParams({ strict: false });

  if (!cultivationId) {
    throw new Error('Error getting cultivation id');
  }

  const { data: usersData } = useGetUsers();

  return useQuery({
    queryKey: ['cultivations', cultivationId, 'users'],
    queryFn: () => getCultivationUsers(cultivationId),
    select: useCallback(
      (data: CultivationUserDTO[]): User[] =>
        data
          .filter((entry) => isNumber(+entry.user.id))
          .map((entry) => sanitizeUserData(usersData ?? [], entry))
          .map((entry) => parseUserData(entry)),
      [usersData]
    ),
    enabled: !!usersData,
  });
};
