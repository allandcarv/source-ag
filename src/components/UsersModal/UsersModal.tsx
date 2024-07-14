import type { FC } from 'react';

import { Modal } from '../../core/components/Modal/Modal';
import { UsersModalHeader } from './components/UsersModalHeader';
import { UsersModalBody } from './components/UsersModalBody/UsersModalBody';
import { UsersModalFooter } from './components/UsersModalFooter/UsersModalFooter';

import { modalContainer } from './UsersModal.styles';

interface UsersModalProps {
  onClose: () => void;
}

export const UsersModal: FC<UsersModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} className={modalContainer}>
      <UsersModalHeader onClose={onClose} />
      <UsersModalBody />
      <UsersModalFooter />
    </Modal>
  );
};
