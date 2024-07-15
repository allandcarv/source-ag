import type { FC } from 'react';

import { StyledLI } from './UsersModalBodyRow.styles';
import { Tag } from '../../../../core/components/Tag/Tag';
import type { UserDTO } from '../../../../interfaces/user-dto';

interface UsersModalBodyRowProps {
  user: UserDTO;
}

export const UsersModalBodyRow: FC<UsersModalBodyRowProps> = ({ user }) => {
  return (
    <StyledLI>
      <input type="checkbox" value={user.name} id={user.id.toString()} />
      <Tag text={user.name} />
      <label htmlFor={user.id.toString()}>{user.name}</label>
    </StyledLI>
  );
};
