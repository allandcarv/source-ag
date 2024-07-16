import type { FC } from 'react';

import { useGetCultivations } from '../../hooks/use-get-cultivations';
import { Table } from '../../core/ui/Table/Table';
import { Spinner } from '../../core/ui/Spinner/Spinner';
import { CultivationsTableHeader } from './components/CultivationsTableHeader';
import { CultivationsTableBody } from './components/CultivationsTableBody';
import { CultivationsTableFooter } from './components/CultivationsTableFooter/CultivationsTableFooter';
import { SearchInput } from '../../core/ui/SearchInput/SearchInput';
import { useFilteredData } from '../../hooks/use-filtered-data';
import { useMutations } from '../../providers/MutationsProvider';

export const CultivationsTable: FC = () => {
  const { data = [], status } = useGetCultivations();
  const {
    postCultivation: { isPending: mutationPending },
  } = useMutations();

  const { filteredData, onInputChangeHandler } = useFilteredData(data, 'name');

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

  if (status === 'pending' || mutationPending) {
    return <Spinner />;
  }

  return <p>An error has occurred</p>;
};
