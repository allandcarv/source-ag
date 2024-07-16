import type { FC } from 'react';

import { Table } from '../../../../core/ui/Table/Table';
import { COLORS } from '../../../constants';
import { UserRow } from './UserRow/UserRow';
import { useGetCultivationUsers } from '../../../../hooks/use-get-cultivation-users';

export const UsersTableBody: FC = () => {
  const { data } = useGetCultivationUsers();

  return (
    <Table.Body>
      {data?.map((user, index) => {
        const tagColor = COLORS[(index + 1) % COLORS.length];

        return <UserRow tagColor={tagColor} user={user} key={user.id} />;
      })}
    </Table.Body>
  );
};
