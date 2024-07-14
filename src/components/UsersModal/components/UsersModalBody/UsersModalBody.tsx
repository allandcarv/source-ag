import type { FC } from 'react';

import { Modal } from '../../../../core/components/Modal/Modal';
import { UsersModalBodyRow } from '../UsersModalBodyRow/UsersModalBodyRow';

import { StyledUL } from './UsersModalBody.styles';
import { SearchInput } from '../../../../core/components/SearchInput/SearchInput';

const DUMMY_DATA = [
  { name: 'Ajay Elkanah', role: 'Head grower' },
  { name: 'Kars ter Velde', role: 'Grower' },
  { name: 'Lalit Dragana', role: 'Guest' },
  { name: 'Aku Vinícius', role: 'Observer' },
  { name: 'Paulien Jonker', role: 'Wholesaler' },
];

export const UsersModalBody: FC = () => {
  return (
    <Modal.Body>
      <SearchInput type="text" placeholder="Search teammember" />
      <StyledUL>
        {DUMMY_DATA.map((user) => (
          <UsersModalBodyRow user={user} key={user.name} />
        ))}
      </StyledUL>
    </Modal.Body>
  );
};
