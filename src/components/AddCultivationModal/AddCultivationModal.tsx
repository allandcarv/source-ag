import { useState, type FC } from 'react';

import { Modal } from '../../core/ui/Modal/Modal';

import { AddCultivationModalHeader } from './components/AddCultivationModalHeader';
import { AddCultivationModalBody } from './components/AddCultivationModalBody';
import { AddCultivationModalFooter } from './components/AddCultivationModalFooter';
import { useMutations } from '../../providers/MutationsProvider';

import { modalContainer } from './AddCultivationModal.styles';

interface AddCultivationModal {
  onClose: () => void;
}

export const AddCultivationModal: FC<AddCultivationModal> = ({ onClose }) => {
  const [cultivationName, setCultivationName] = useState<string>('');

  const {
    postCultivation: { mutate },
  } = useMutations();

  const setCultivationNameHandler = (text: string) => {
    setCultivationName(text.trim());
  };

  const onAddCultivationHandler = () => {
    mutate({ name: cultivationName });
    onClose();
  };

  return (
    <Modal onClose={onClose} className={modalContainer}>
      <AddCultivationModalHeader onClose={onClose} />
      <AddCultivationModalBody
        onSetCultivationName={setCultivationNameHandler}
      />
      <AddCultivationModalFooter
        onAddCultivation={onAddCultivationHandler}
        isButtonDisabled={!cultivationName.length}
      />
    </Modal>
  );
};
