import type { FC } from 'react';

import { Modal } from '../../../core/components/Modal/Modal';
import { Button } from '../../../core/components/Button/Button';

interface AddCultivationModalFooterProps {
  onAddCultivation: () => void;
  isButtonDisabled?: boolean;
}

export const AddCultivationModalFooter: FC<AddCultivationModalFooterProps> = ({
  onAddCultivation,
  isButtonDisabled,
}) => {
  return (
    <Modal.Footer>
      <Button
        variant="primary"
        onClick={onAddCultivation}
        disabled={isButtonDisabled}
      >
        Create cultivation
      </Button>
    </Modal.Footer>
  );
};
