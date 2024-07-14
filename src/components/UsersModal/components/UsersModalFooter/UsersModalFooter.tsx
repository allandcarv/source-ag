import type { FC } from 'react';

import { Button } from '../../../../core/components/Button/Button';
import { Modal } from '../../../../core/components/Modal/Modal';

import { alignContentToRight } from './UsersModalFooter.styles';

export const UsersModalFooter: FC = () => {
  return (
    <Modal.Footer className={alignContentToRight}>
      <Button variant="primary">Add to cultivation</Button>
    </Modal.Footer>
  );
};
