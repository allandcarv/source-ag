import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { Table } from '../../../../core/components/Table/Table';
import { ArrowIcon } from '../../../../core/components/ArrowIcon/ArrowIcon';

import { roleCell } from './UsersTableBody.styles';
import { Button } from '../../../../core/components/Button/Button';

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
            <Button variant="link">Remove</Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
