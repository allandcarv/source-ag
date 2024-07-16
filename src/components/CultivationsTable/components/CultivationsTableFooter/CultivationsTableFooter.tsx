import { useState, type FC } from 'react';

import { Table } from '../../../../core/ui/Table/Table';
import { Button } from '../../../../core/ui/Button/Button';
import { tableFooterRow } from './CultivationsTableFooter.styles';
import { AddCultivationModal } from '../../../AddCultivationModal/AddCultivationModal';

export const CultivationsTableFooter: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => setShowModal((prevStatus) => !prevStatus);

  const onCloseHandler = () => setShowModal(false);

  return (
    <>
      <Table.Foot>
        <Table.Row className={tableFooterRow}>
          <Table.Cell>
            <Button variant="light" onClick={onClickHandler}>
              ＋ Add cultivation
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Foot>
      {showModal && <AddCultivationModal onClose={onCloseHandler} />}
    </>
  );
};
