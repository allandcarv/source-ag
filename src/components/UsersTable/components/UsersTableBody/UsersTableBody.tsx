import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { Table } from '../../../../core/components/Table/Table';
import { ArrowIcon } from '../../../../core/components/ArrowIcon/ArrowIcon';

import { roleCell } from './UsersTableBody.styles';

interface UsersTableBodyProps {
  users: User[];
}

export const UsersTableBody: FC<UsersTableBodyProps> = ({ users }) => {
  return (
    <Table.Body>
      {users.map((user) => (
        <Table.Row key={user.name}>
          <Table.Cell>{user.name}</Table.Cell>
          <Table.Cell className={roleCell}>
            {user.role} <ArrowIcon collapsed />
          </Table.Cell>
          <Table.Cell>
            <button>Remove</button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
