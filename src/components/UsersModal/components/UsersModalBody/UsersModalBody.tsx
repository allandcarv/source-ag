import { Modal } from '../../../../core/components/Modal/Modal';

import { flexDirectionColumn } from './UsersModalBody.styles';

const DUMMY_DATA = [
  { name: 'Ajay Elkanah', role: 'Head grower' },
  { name: 'Kars ter Velde', role: 'Grower' },
  { name: 'Lalit Dragana', role: 'Guest' },
  { name: 'Aku Vinícius', role: 'Observer' },
  { name: 'Paulien Jonker', role: 'Wholesaler' },
];

export const UsersModalBody = () => {
  return (
    <Modal.Body className={flexDirectionColumn}>
      <input type="text" placeholder="Search teammember" />
      {DUMMY_DATA.map((user) => (
        <>
          <input type="checkbox" value={user.name} key={user.name} />
          <label>{user.name}</label>
        </>
      ))}
    </Modal.Body>
  );
};
