import type { FC } from 'react';

import { Table } from '../../../core/components/Table/Table';

export const UsersTableHeader: FC = () => {
  return (
    <Table.Head>
      <Table.Row>
        <Table.HeadCell style={{ textAlign: 'left' }}>Name</Table.HeadCell>
        <Table.HeadCell style={{ textAlign: 'left' }} colSpan={2}>
          Cultivation Role
        </Table.HeadCell>
      </Table.Row>
    </Table.Head>
  );
};
