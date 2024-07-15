import type { FC } from 'react';

import { Modal } from '../../../core/components/Modal/Modal';

interface AddCultivationModalHeaderProps {
  onClose: () => void;
}

export const AddCultivationModalHeader: FC<AddCultivationModalHeaderProps> = ({
  onClose,
}) => {
  return (
    <Modal.Header onClose={onClose}>
      <h2>Create new cultivation</h2>
    </Modal.Header>
  );
};
