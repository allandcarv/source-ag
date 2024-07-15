import { Spinner } from '../../core/components/Spinner/Spinner';
import { Table } from '../../core/components/Table/Table';
import { useGetCultivationUsers } from '../../hooks/use-get-cultivation-users';
import { UsersTableBody } from './components/UsersTableBody/UsersTableBody';
import { UsersTableFooter } from './components/UsersTableFooter/UsersTableFooter';
import { UsersTableHeader } from './components/UsersTableHeader';

export const UsersTable = () => {
  const { data, status } = useGetCultivationUsers(
    '94eb21dd-d0d2-4e30-b3b8-51be6c6fa699'
  );

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
