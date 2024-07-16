import type { FC } from 'react';

import { Modal } from '../../../../core/ui/Modal/Modal';
import { UsersModalBodyRow } from '../UsersModalBodyRow/UsersModalBodyRow';
import { SearchInput } from '../../../../core/ui/SearchInput/SearchInput';
import type { UserDTO } from '../../../../interfaces/user-dto';
import { useFilteredData } from '../../../../hooks/use-filtered-data';
import { COLORS } from '../../../constants';

import { StyledUL } from './UsersModalBody.styles';

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
        placeholder="Search teammember"
        onChange={onInputChangeHandler}
      />
      <StyledUL>
        {filteredData.map((user, index) => {
          const tagColor = COLORS[(index + 1) % COLORS.length];

          return (
            <UsersModalBodyRow user={user} tagColor={tagColor} key={user.id} />
          );
        })}
      </StyledUL>
    </Modal.Body>
  );
};
