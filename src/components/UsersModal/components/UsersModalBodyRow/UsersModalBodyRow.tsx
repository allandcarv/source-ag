import type { ChangeEvent, FC } from 'react';

import { StyledLI } from './UsersModalBodyRow.styles';
import { Tag } from '../../../../core/components/Tag/Tag';
import type { UserDTO } from '../../../../interfaces/user-dto';
import { useSelectedUsers } from '../../providers/SelectedUsers';

interface UsersModalBodyRowProps {
  user: UserDTO;
}

export const UsersModalBodyRow: FC<UsersModalBodyRowProps> = ({ user }) => {
  const { selectedUsers, setSelectedUsers } = useSelectedUsers();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedUsers(+event.target.value);
  };
  return (
    <StyledLI>
      <input
        type="checkbox"
        value={user.id}
        id={user.id.toString()}
        checked={selectedUsers.has(user.id)}
        onChange={onChangeHandler}
      />
      <Tag text={user.name} />
      <label htmlFor={user.id.toString()}>{user.name}</label>
    </StyledLI>
  );
};
