import type { FC } from 'react';

import { Table } from '../../../core/components/Table/Table';

export const CultivationsTableHeader: FC = () => {
  return (
    <Table.Head>
      <Table.Row>
        <Table.HeadCell style={{ textAlign: 'left' }}>Name</Table.HeadCell>
      </Table.Row>
    </Table.Head>
  );
};
