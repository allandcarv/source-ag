import type { FC } from 'react';

import { Button } from '../../../../core/components/Button/Button';
import { Modal } from '../../../../core/components/Modal/Modal';

import { alignContentToRight } from './UsersModalFooter.styles';
import { usePostCultivationUser } from '../../../../hooks/use-post-cultivation-user';
import { useSelectedUsers } from '../../providers/SelectedUsers';

export const UsersModalFooter: FC = () => {
  const { createCultivationUser } = usePostCultivationUser();
  const { selectedUsers } = useSelectedUsers();

  const onClickHandler = () => {
    selectedUsers.forEach((userId) => createCultivationUser(userId));
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
