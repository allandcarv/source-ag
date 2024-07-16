import type { FC } from 'react';
import { useParams } from '@tanstack/react-router';

import { Button } from '../../../../core/ui/Button/Button';
import { Modal } from '../../../../core/ui/Modal/Modal';

import { alignContentToRight } from './UsersModalFooter.styles';
import { useSelectedUsers } from '../../providers/SelectedUsers';
import { useMutations } from '../../../../providers/MutationsProvider';

interface UsersModalFooterProps {
  onClose: () => void;
}

export const UsersModalFooter: FC<UsersModalFooterProps> = ({ onClose }) => {
  const { cultivationId = '' } = useParams({ strict: false });
  const {
    postCultivationUser: { mutate },
  } = useMutations();
  const { selectedUsers } = useSelectedUsers();

  const onClickHandler = () => {
    mutate({ userIds: Array.from(selectedUsers), cultivationId });
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
