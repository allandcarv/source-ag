import type { FC } from 'react';

import type { CultivationDTO } from '../../../interfaces/cultivation-dto';
import { Table } from '../../../core/ui/Table/Table';
import { Link } from '@tanstack/react-router';

interface CultivationsTableBodyProps {
  cultivations: CultivationDTO[];
}

export const CultivationsTableBody: FC<CultivationsTableBodyProps> = ({
  cultivations,
}) => {
  return (
    <Table.Body>
      {cultivations.map((cultivation) => (
        <Table.Row key={cultivation.id}>
          <Table.Cell>
            <Link to={`cultivation/${cultivation.id}`}>{cultivation.name}</Link>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
