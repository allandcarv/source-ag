import type { FC } from 'react';

import { Tag } from '../../../../core/ui/Tag/Tag';
import type { UserDTO } from '../../../../interfaces/user-dto';
import { useSelectedUsers } from '../../providers/SelectedUsers';
import type { Color } from '../../../../interfaces/tag-color';

import { StyledLabel, StyledLI } from './UsersModalBodyRow.styles';

interface UsersModalBodyRowProps {
  user: UserDTO;
  tagColor: Color;
}

export const UsersModalBodyRow: FC<UsersModalBodyRowProps> = ({
  tagColor,
  user,
}) => {
  const { selectedUsers, addSelectUser, removeSelectUser } = useSelectedUsers();

  const isUserChecked = selectedUsers.has(user.id);

  const onChangeHandler = () =>
    isUserChecked ? removeSelectUser(user.id) : addSelectUser(user.id);

  return (
    <StyledLI>
      <input
        type="checkbox"
        value={user.id}
        id={user.id.toString()}
        checked={isUserChecked}
        onChange={onChangeHandler}
      />

      <StyledLabel htmlFor={user.id.toString()}>
        <Tag text={user.name} tagColor={tagColor} />
        {user.name}
      </StyledLabel>
    </StyledLI>
  );
};
