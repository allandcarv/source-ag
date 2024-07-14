import { useQuery } from '@tanstack/react-query';

import { getCultivationRoles } from '../core/services/api';

export const useGetRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: getCultivationRoles,
  });
};
