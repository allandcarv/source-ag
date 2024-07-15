import type { FC } from 'react';

import { Modal } from '../../../../core/components/Modal/Modal';
import { UsersModalBodyRow } from '../UsersModalBodyRow/UsersModalBodyRow';

import { StyledUL } from './UsersModalBody.styles';
import { SearchInput } from '../../../../core/components/SearchInput/SearchInput';
import type { UserDTO } from '../../../../interfaces/user-dto';
import { useFilteredData } from '../../../../hooks/use-filtered-data';

interface UsersModalBodyProps {
  users: UserDTO[];
}

export const UsersModalBody: FC<UsersModalBodyProps> = ({ users }) => {
  const { filteredData, onInputChangeHandler } = useFilteredData<UserDTO>(
    users,
    'name'
  );

  return (
    <Modal.Body>
      <SearchInput
        type="text"
        placeholder="Search teammember"
        onChange={onInputChangeHandler}
      />
      <StyledUL>
        {filteredData.map((user) => (
          <UsersModalBodyRow user={user} key={user.id} />
        ))}
      </StyledUL>
    </Modal.Body>
  );
};
