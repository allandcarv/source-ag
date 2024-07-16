import type { FC } from 'react';

import { Modal } from '../../../core/ui/Modal/Modal';

interface UsersModalHeaderProps {
  onClose: () => void;
}

export const UsersModalHeader: FC<UsersModalHeaderProps> = ({ onClose }) => {
  return (
    <Modal.Header onClose={onClose}>
      <h2>Add teammember</h2>
    </Modal.Header>
  );
};
