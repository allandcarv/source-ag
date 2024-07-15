import { useQuery } from '@tanstack/react-query';

import { getCultivationUsers } from '../core/services/api';
import { useCallback } from 'react';
import type { CultivationUserDTO } from '../interfaces/cultivation-user-dto';
import { isNumber } from '../core/utils/is-number';
import { useGetUsers } from './use-get-users';
import type { UserDTO } from '../interfaces/user-dto';
import type { User } from '../interfaces/user';

const sanitizeUserData = (
  users: UserDTO[],
  cultivatioUser: CultivationUserDTO
): CultivationUserDTO => {
  const sanitizedUserData = {
    ...cultivatioUser,
    user: { ...cultivatioUser.user, id: +cultivatioUser.user.id },
  };

  if (!sanitizedUserData.user.name) {
    const user = users.find((user) => user.id === sanitizedUserData.user.id);

    sanitizedUserData.user.name = user?.name ?? '';
  }

  return sanitizedUserData;
};

const parseUserData = (cultivationUser: CultivationUserDTO): User => {
  return {
    id: cultivationUser.user.id,
    name: cultivationUser.user.name,
    cultivationId: cultivationUser.cultivation_id,
    role: cultivationUser.role,
  };
};

export const useGetCultivationUsers = (cultivationId: string) => {
  const { data: usersData } = useGetUsers();

  return useQuery({
    queryKey: [cultivationId, 'users'],
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
