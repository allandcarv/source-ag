import { useState, type FC } from 'react';

import { Table } from '../../../../core/ui/Table/Table';
import { Button } from '../../../../core/ui/Button/Button';
import { tableFooterRow } from './UsersTableFooter.styles';
import { UsersModal } from '../../../UsersModal/UsersModal';

export const UsersTableFooter: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => setShowModal((prevStatus) => !prevStatus);

  const onCloseHandler = () => setShowModal(false);

  return (
    <>
      <Table.Foot>
        <Table.Row className={tableFooterRow}>
          <Table.Cell>
            <Button variant="light" onClick={onClickHandler}>
              ＋ Add teammember
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Foot>
      {showModal && <UsersModal onClose={onCloseHandler} />}
    </>
  );
};
