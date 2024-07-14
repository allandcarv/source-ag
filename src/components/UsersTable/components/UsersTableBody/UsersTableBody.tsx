import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { Table } from '../../../../core/components/Table/Table';
import { ArrowIcon } from '../../../../core/components/ArrowIcon/ArrowIcon';

import { ContainerCell } from './UsersTableBody.styles';
import { Button } from '../../../../core/components/Button/Button';
import { Tag } from '../../../../core/components/Tag/Tag';

interface UsersTableBodyProps {
  users: User[];
}

export const UsersTableBody: FC<UsersTableBodyProps> = ({ users }) => {
  return (
    <Table.Body>
      {users.map((user) => (
        <Table.Row key={user.name}>
          <Table.Cell>
            <ContainerCell>
              <Tag text={user.name} />
              {user.name}
            </ContainerCell>
          </Table.Cell>
          <Table.Cell>
            <ContainerCell>
              {user.role}
              <ArrowIcon collapsed />
            </ContainerCell>
          </Table.Cell>
          <Table.Cell>
            <Button variant="link">Remove</Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
