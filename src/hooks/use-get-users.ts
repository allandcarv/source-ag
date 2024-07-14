import { useQuery } from '@tanstack/react-query';

import { getUsers } from '../core/services/api';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
