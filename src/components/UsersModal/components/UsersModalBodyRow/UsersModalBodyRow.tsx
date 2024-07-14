import type { FC } from 'react';

import type { User } from '../../../../interfaces/user';
import { StyledLI } from './UsersModalBodyRow.styles';
import { Tag } from '../../../../core/components/Tag/Tag';

interface UsersModalBodyRowProps {
  user: User;
}

export const UsersModalBodyRow: FC<UsersModalBodyRowProps> = ({ user }) => {
  return (
    <StyledLI>
      <input type="checkbox" value={user.name} key={user.name} id={user.name} />
      <Tag text={user.name} />
      <label htmlFor={user.name}>{user.name}</label>
    </StyledLI>
  );
};
