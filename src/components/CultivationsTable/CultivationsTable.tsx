import type { FC } from 'react';

import { useGetCultivations } from '../../hooks/use-get-cultivations';
import { Table } from '../../core/components/Table/Table';
import { Spinner } from '../../core/components/Spinner/Spinner';
import { CultivationsTableHeader } from './components/CultivationsTableHeader';
import { CultivationsTableBody } from './components/CultivationsTableBody';
import { CultivationsTableFooter } from './components/CultivationsTableFooter/CultivationsTableFooter';

export const CultivationsTable: FC = () => {
  const { data, status } = useGetCultivations();

  if (status === 'success') {
    return (
      <Table>
        <CultivationsTableHeader />
        <CultivationsTableBody cultivations={data} />
        <CultivationsTableFooter />
      </Table>
    );
  }

  if (status === 'pending') {
    return <Spinner />;
  }

  return <p>An error has occurred</p>;
};
