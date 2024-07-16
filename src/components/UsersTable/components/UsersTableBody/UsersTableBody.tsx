import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { Table } from '../../../../core/ui/Table/Table';
import { Button } from '../../../../core/ui/Button/Button';
import { Tag } from '../../../../core/ui/Tag/Tag';
import { useDeleteCultivationUser } from '../../../../hooks/use-delete-cultivation-user';
import { COLORS } from '../../../constants';

import { ContainerCell } from './UsersTableBody.styles';
import { UserRoleCell } from './UserRoleCell/UserRoleCell';

interface UsersTableBodyProps {
  users: User[];
}

export const UsersTableBody: FC<UsersTableBodyProps> = ({ users }) => {
  const { deleteCultivationUser } = useDeleteCultivationUser();

  const onButtonClickHandler = (userId: number) =>
    deleteCultivationUser(userId);

  return (
    <Table.Body>
      {users.map((user, index) => {
        const tagColor = COLORS[(index + 1) % COLORS.length];

        return (
          <Table.Row key={user.id} style={{ position: 'relative' }}>
            <Table.Cell>
              <ContainerCell>
                <Tag text={user.name} tagColor={tagColor} />
                {user.name}
              </ContainerCell>
            </Table.Cell>
            <Table.Cell>
              <UserRoleCell user={user} />
            </Table.Cell>
            <Table.Cell>
              <Button
                variant="link"
                onClick={() => onButtonClickHandler(user.id)}
              >
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};
