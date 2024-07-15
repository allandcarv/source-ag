import type { FC } from 'react';

import { useGetCultivations } from '../../hooks/use-get-cultivations';
import { Table } from '../../core/components/Table/Table';
import { Spinner } from '../../core/components/Spinner/Spinner';
import { CultivationsTableHeader } from './components/CultivationsTableHeader';
import { CultivationsTableBody } from './components/CultivationsTableBody';
import { CultivationsTableFooter } from './components/CultivationsTableFooter/CultivationsTableFooter';
import { SearchInput } from '../../core/components/SearchInput/SearchInput';
import { useFilteredData } from '../../hooks/use-filtered-data';

export const CultivationsTable: FC = () => {
  const { data, status } = useGetCultivations();

  const { filteredData, onInputChangeHandler } = useFilteredData(
    data ?? [],
    'name'
  );

  if (status === 'success') {
    return (
      <>
        <SearchInput onChange={onInputChangeHandler} />
        <Table>
          <CultivationsTableHeader />
          <CultivationsTableBody cultivations={filteredData} />
          <CultivationsTableFooter />
        </Table>
      </>
    );
  }

  if (status === 'pending') {
    return <Spinner />;
  }

  return <p>An error has occurred</p>;
};
