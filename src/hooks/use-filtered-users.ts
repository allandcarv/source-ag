import { useParams } from '@tanstack/react-router';
import { useMemo } from 'react';

import { useGetCultivationUsers } from './use-get-cultivation-users';
import { useGetUsers } from './use-get-users';

export const useFilteredUsers = () => {
  const { cultivationId } = useParams({ strict: false });

  const users = useGetUsers();
  const cultivationUsers = useGetCultivationUsers(cultivationId ?? '');

  const isLoading =
    users.status === 'pending' && cultivationUsers.status === 'pending';

  const isReady =
    users.status === 'success' && cultivationUsers.status === 'success';

  const isError =
    users.status === 'error' || cultivationUsers.status === 'error';

  const cultivationUsersIds = new Set(
    cultivationUsers.data?.map((user) => user.id)
  );

  const filteredUsers = useMemo(
    () =>
      isReady
        ? users.data.filter((user) => !cultivationUsersIds.has(user.id))
        : [],

    []
  );

  return { filteredUsers, isLoading, isError };
};
