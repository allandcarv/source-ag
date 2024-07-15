import type { FC } from 'react';

import { Button } from '../../../../core/components/Button/Button';
import { Modal } from '../../../../core/components/Modal/Modal';

import { alignContentToRight } from './UsersModalFooter.styles';
import { usePostCultivationUser } from '../../../../hooks/use-post-cultivation-user';
import { useSelectedUsers } from '../../providers/SelectedUsers';

interface UsersModalFooterProps {
  onClose: () => void;
}

export const UsersModalFooter: FC<UsersModalFooterProps> = ({ onClose }) => {
  const { createCultivationUser } = usePostCultivationUser();
  const { selectedUsers } = useSelectedUsers();

  const onClickHandler = () => {
    createCultivationUser(Array.from(selectedUsers));
    onClose();
  };

  return (
    <Modal.Footer className={alignContentToRight}>
      <Button
        variant="primary"
        disabled={!selectedUsers.size}
        onClick={onClickHandler}
      >
        Add to cultivation
      </Button>
    </Modal.Footer>
  );
};
