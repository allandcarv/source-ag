import { useQuery } from '@tanstack/react-query';

import { getCultivationUsers } from '../core/services/api';

export const useGetCultivationUsers = (cultivationId: string) => {
  return useQuery({
    queryKey: [cultivationId, 'users'],
    queryFn: () => getCultivationUsers(cultivationId),
  });
};
