import { useGetCultivations } from './use-get-cultivations';
import { useGetRoles } from './use-get-roles';
import { useGetUsers } from './use-get-users';

export const useGetData = () => {
  const cultivations = useGetCultivations();
  console.log('🚀 ~ useGetData ~ cultivations:', cultivations.data);
  const roles = useGetRoles();
  console.log('🚀 ~ useGetData ~ roles:', roles.data);
  const users = useGetUsers();
  console.log('🚀 ~ useGetData ~ users:', users.data);
};
