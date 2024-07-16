import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { Table } from '../../../../core/components/Table/Table';
import { ArrowIcon } from '../../../../core/components/ArrowIcon/ArrowIcon';

import { ContainerCell } from './UsersTableBody.styles';
import { Button } from '../../../../core/components/Button/Button';
import { Tag } from '../../../../core/components/Tag/Tag';
import { useDeleteCultivationUser } from '../../../../hooks/use-delete-cultivation-user';
import { COLORS } from '../../../constants';

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
          <Table.Row key={user.id}>
            <Table.Cell>
              <ContainerCell>
                <Tag text={user.name} tagColor={tagColor} />
                {user.name}
              </ContainerCell>
            </Table.Cell>
            <Table.Cell>
              <ContainerCell>
                {user.role.name}
                <ArrowIcon collapsed />
              </ContainerCell>
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
