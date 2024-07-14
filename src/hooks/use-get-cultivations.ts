import { useQuery } from '@tanstack/react-query';

import { getCultivations } from '../core/services/api';

export const useGetCultivations = () => {
  return useQuery({
    queryKey: ['cultivations'],
    queryFn: getCultivations,
  });
};
