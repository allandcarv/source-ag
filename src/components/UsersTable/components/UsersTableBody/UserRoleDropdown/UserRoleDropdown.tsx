import type { FC } from 'react';

import type { User } from '../../../../../interfaces/user';
import { Dropdown } from '../../../../../core/ui/Dropdown/Dropdown';
import { useGetRoles } from '../../../../../hooks/use-get-roles';
import { Spinner } from '../../../../../core/ui/Spinner/Spinner';

import { StyledList, SyledListItem } from './UserRoleDropdown.styles';
import { useUpdateCultivationUserRole } from '../../../../../hooks/use-update-cultivation-user-role';

interface UserRoleDropdownProps {
  user: User;
}

export const UserRoleDropdown: FC<UserRoleDropdownProps> = ({ user }) => {
  const { data, status } = useGetRoles();
  const { updateCultivationUserRole } = useUpdateCultivationUserRole();

  if (status === 'pending') {
    return (
      <Dropdown>
        <Spinner />
      </Dropdown>
    );
  }

  const filteredRoles = data?.filter((role) => role.id !== user.role.id);

  const onClickRoleHandler = (roleId: number) =>
    updateCultivationUserRole({ userId: user.id, roleId });

  return (
    <Dropdown onClick={(e) => e.stopPropagation()}>
      <StyledList>
        {filteredRoles?.map((role) => (
          <SyledListItem
            key={role.id}
            onClick={() => onClickRoleHandler(role.id)}
          >
            <p>
              <strong>{role.name}</strong>
            </p>
            <p>{role.description}</p>
          </SyledListItem>
        ))}
      </StyledList>
    </Dropdown>
  );
};
