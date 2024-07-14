import type { FC } from 'react';

import { Table } from '../../../../core/components/Table/Table';
import { Button } from '../../../../core/components/Button/Button';
import { tableFooterRow } from './UsersTableFooter.styles';

export const UsersTableFooter: FC = () => {
  return (
    <Table.Foot>
      <Table.Row className={tableFooterRow}>
        <Table.Cell>
          <Button variant="light">＋ Add teammember</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Foot>
  );
};
