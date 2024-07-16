import { useEffect, useRef, useState, type ElementRef, type FC } from 'react';

import { ArrowIcon } from '../../../../../core/ui/ArrowIcon/ArrowIcon';
import type { User } from '../../../../../interfaces/user';

import { ContainerCell } from './UserRoleCell.styles';
import { UserRoleDropdown } from '../UserRoleDropdown/UserRoleDropdown';

interface UserRoleCellProps {
  user: User;
}

export const UserRoleCell: FC<UserRoleCellProps> = ({ user }) => {
  const [collapsed, setCollapsed] = useState(true);
  const containerRef = useRef<ElementRef<'div'>>(null);

  const onClickHandler = () => setCollapsed((prevStatus) => !prevStatus);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setCollapsed(true);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  });

  return (
    <ContainerCell onClick={onClickHandler} ref={containerRef}>
      {user.role.name}
      <ArrowIcon collapsed={collapsed} />
      {!collapsed && <UserRoleDropdown user={user} />}
    </ContainerCell>
  );
};
