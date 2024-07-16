import type { FC } from 'react';

import { Spinner } from '../../core/ui/Spinner/Spinner';
import { Table } from '../../core/ui/Table/Table';
import { useGetCultivationUsers } from '../../hooks/use-get-cultivation-users';
import { UsersTableBody } from './components/UsersTableBody/UsersTableBody';
import { UsersTableFooter } from './components/UsersTableFooter/UsersTableFooter';
import { UsersTableHeader } from './components/UsersTableHeader';

export const CultivationUsersTable: FC = () => {
  const { data, status: usersStatus } = useGetCultivationUsers();

  if (usersStatus === 'pending') {
    return <Spinner />;
  }

  if (usersStatus === 'success') {
    return (
      <Table>
        <UsersTableHeader />
        <UsersTableBody users={data ?? []} />
        <UsersTableFooter />
      </Table>
    );
  }

  return <p>An error has occurred</p>;
};
