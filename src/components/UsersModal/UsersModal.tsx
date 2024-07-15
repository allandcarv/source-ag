import type { FC } from 'react';

import { Modal } from '../../core/components/Modal/Modal';
import { UsersModalHeader } from './components/UsersModalHeader';
import { UsersModalBody } from './components/UsersModalBody/UsersModalBody';
import { UsersModalFooter } from './components/UsersModalFooter/UsersModalFooter';

import { modalContainer } from './UsersModal.styles';
import { useFilteredUsers } from '../../hooks/use-filtered-users';
import { Spinner } from '../../core/components/Spinner/Spinner';

interface UsersModalProps {
  onClose: () => void;
}

export const UsersModal: FC<UsersModalProps> = ({ onClose }) => {
  const { filteredUsers, isError, isLoading } = useFilteredUsers();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>An error has occurred</p>;
  }

  return (
    <Modal onClose={onClose} className={modalContainer}>
      <UsersModalHeader onClose={onClose} />
      <UsersModalBody users={filteredUsers} />
      <UsersModalFooter />
    </Modal>
  );
};
