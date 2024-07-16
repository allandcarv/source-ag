import type { FC } from 'react';

import { Spinner } from '../../core/ui/Spinner/Spinner';
import { Table } from '../../core/ui/Table/Table';
import { useGetCultivationUsers } from '../../hooks/use-get-cultivation-users';
import { UsersTableBody } from './components/UsersTableBody/UsersTableBody';
import { UsersTableFooter } from './components/UsersTableFooter/UsersTableFooter';
import { UsersTableHeader } from './components/UsersTableHeader';
import { useMutations } from '../../providers/MutationsProvider';

export const CultivationUsersTable: FC = () => {
  const {
    deleteCultivationUser: { isPending: deleteUserPending },
    postCultivationUser: { isPending: postUserPending },
  } = useMutations();
  const { status: usersStatus } = useGetCultivationUsers();

  if (usersStatus === 'pending' || postUserPending || deleteUserPending) {
    return <Spinner />;
  }

  if (usersStatus === 'success') {
    return (
      <Table>
        <UsersTableHeader />
        <UsersTableBody />
        <UsersTableFooter />
      </Table>
    );
  }

  return <p>An error has occurred</p>;
};
