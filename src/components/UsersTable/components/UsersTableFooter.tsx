import type { FC } from 'react';

import { Table } from '../../../core/components/Table/Table';

export const UsersTableFooter: FC = () => {
  return (
    <Table.Foot>
      <button>﹢ Add teammember</button>
    </Table.Foot>
  );
};
