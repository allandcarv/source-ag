import { Table } from '../../core/components/Table/Table';
import { UsersTableBody } from './components/UsersTableBody/UsersTableBody';
import { UsersTableFooter } from './components/UsersTableFooter/UsersTableFooter';
import { UsersTableHeader } from './components/UsersTableHeader';

const DUMMY_DATA = [
  { name: 'Ajay Elkanah', role: 'Head grower' },
  { name: 'Kars ter Velde', role: 'Grower' },
  { name: 'Lalit Dragana', role: 'Guest' },
  { name: 'Aku Vinícius', role: 'Observer' },
  { name: 'Paulien Jonker', role: 'Wholesaler' },
];

export const UsersTable = () => {
  return (
    <Table>
      <UsersTableHeader />
      <UsersTableBody users={DUMMY_DATA} />
      <UsersTableFooter />
    </Table>
  );
};
