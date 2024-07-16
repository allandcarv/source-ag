import type { ChangeEvent, FC } from 'react';

import { Tag } from '../../../../core/ui/Tag/Tag';
import type { UserDTO } from '../../../../interfaces/user-dto';
import { useSelectedUsers } from '../../providers/SelectedUsers';
import type { Color } from '../../../../interfaces/tag-color';

import { StyledLI } from './UsersModalBodyRow.styles';

interface UsersModalBodyRowProps {
  user: UserDTO;
  tagColor: Color;
}

export const UsersModalBodyRow: FC<UsersModalBodyRowProps> = ({
  tagColor,
  user,
}) => {
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
      <Tag text={user.name} tagColor={tagColor} />
      <label htmlFor={user.id.toString()}>{user.name}</label>
    </StyledLI>
  );
};
