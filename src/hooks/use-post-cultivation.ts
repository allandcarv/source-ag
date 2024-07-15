import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { postCultivation } from '../core/services/api';
import type { CultivationDTO } from '../interfaces/cultivation-dto';

export const usePostCultivation = () => {
  const navigate = useNavigate({ from: '/cultivation/$cultivationId' });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postCultivation,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['cultivations'] });

      const previousCultivations = queryClient.getQueryData<CultivationDTO[]>([
        'cultivations',
      ]);

      return { previousCultivations };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData<CultivationDTO[]>(
        ['cultivations'],
        context?.previousCultivations
      );
    },
    onSuccess: (newCultivation) => {
      queryClient.setQueryData(
        ['cultivations'],
        (previous: CultivationDTO[]) => [...previous, newCultivation]
      );

      navigate({
        to: '/cultivation/$cultivationId',
        params: { cultivationId: newCultivation.id },
      });
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['cultivations'] }),
  });

  return {
    createCultivation: mutate,
  };
};
