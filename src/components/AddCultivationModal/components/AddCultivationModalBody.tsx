import type { ChangeEvent, FC } from 'react';

import { Modal } from '../../../core/ui/Modal/Modal';
import { TextInput } from '../../../core/ui/TextInput/TextInput';

interface AddCultivationModalBodyProps {
  onSetCultivationName: (text: string) => void;
}

export const AddCultivationModalBody: FC<AddCultivationModalBodyProps> = ({
  onSetCultivationName,
}) => {
  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSetCultivationName(event.target.value);
  };

  return (
    <Modal.Body>
      <TextInput
        placeholder="Add cultivation name"
        onChange={onInputChangeHandler}
      />
    </Modal.Body>
  );
};
