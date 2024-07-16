import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from 'react';

import { usePostCultivationUser } from '../hooks/use-post-cultivation-user';
import { usePostCultivation } from '../hooks/use-post-cultivation';
import { useUpdateCultivationUserRole } from '../hooks/use-update-cultivation-user-role';
import { useDeleteCultivationUser } from '../hooks/use-delete-cultivation-user';

interface MutationsProviderProps {
  deleteCultivationUser: ReturnType<typeof useDeleteCultivationUser>;
  postCultivationUser: ReturnType<typeof usePostCultivationUser>;
  postCultivation: ReturnType<typeof usePostCultivation>;
  updateCultivationUserRole: ReturnType<typeof useUpdateCultivationUserRole>;
}

export const MutationsContext = createContext<MutationsProviderProps>(
  {} as MutationsProviderProps
);

export const MutationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const deleteCultivationUser = useDeleteCultivationUser();
  const postCultivationUser = usePostCultivationUser();
  const postCultivation = usePostCultivation();
  const updateCultivationUserRole = useUpdateCultivationUserRole();

  return (
    <MutationsContext.Provider
      value={{
        deleteCultivationUser,
        postCultivation,
        postCultivationUser,
        updateCultivationUserRole,
      }}
    >
      {children}
    </MutationsContext.Provider>
  );
};

export const useMutations = () => useContext(MutationsContext);
