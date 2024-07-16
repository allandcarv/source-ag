import type { FC } from 'react';
import { useParams } from '@tanstack/react-router';

import { Table } from '../../../../../core/ui/Table/Table';
import { useMutations } from '../../../../../providers/MutationsProvider';
import { ContainerCell } from '../UsersTableBody.styles';
import { Tag } from '../../../../../core/ui/Tag/Tag';
import type { User } from '../../../../../interfaces/user';
import type { Color } from '../../../../../interfaces/tag-color';
import { UserRoleCell } from '../UserRoleCell/UserRoleCell';
import { Button } from '../../../../../core/ui/Button/Button';

interface UserRowProps {
  user: User;
  tagColor: Color;
}

export const UserRow: FC<UserRowProps> = ({ tagColor, user }) => {
  const {
    deleteCultivationUser: { mutate: deleteCultivationUser },
  } = useMutations();
  const { cultivationId = '' } = useParams({ strict: false });

  const onButtonClickHandler = () =>
    deleteCultivationUser({ cultivationId, userId: user.id });

  return (
    <Table.Row style={{ position: 'relative' }}>
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
        <Button variant="link" onClick={onButtonClickHandler}>
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
