import type { FC } from 'react';

import { Spinner } from '../../core/components/Spinner/Spinner';
import { Table } from '../../core/components/Table/Table';
import { useGetCultivationUsers } from '../../hooks/use-get-cultivation-users';
import { UsersTableBody } from './components/UsersTableBody/UsersTableBody';
import { UsersTableFooter } from './components/UsersTableFooter/UsersTableFooter';
import { UsersTableHeader } from './components/UsersTableHeader';
import { useParams } from '@tanstack/react-router';

export const CultivationUsersTable: FC = () => {
  const { cultivationId } = useParams({ strict: false });

  if (!cultivationId) return null;

  const { data, status } = useGetCultivationUsers(cultivationId);

  if (status === 'success') {
    return (
      <Table>
        <UsersTableHeader />
        <UsersTableBody users={data ?? []} />
        <UsersTableFooter />
      </Table>
    );
  }

  if (status === 'pending') {
    return <Spinner />;
  }

  return <p>An error has occurred</p>;
};
