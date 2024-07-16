import type { RoleDTO } from './role-dto';
import type { UserDTO } from './user-dto';

export interface CultivationUserDTO {
  cultivation_id: string;
  role: Omit<RoleDTO, 'description'>;
  user: UserDTO;
}

export interface CultivationUserRequestBody {
  role: Pick<RoleDTO, 'id'>;
  user: Pick<UserDTO, 'id'>;
}

export interface CultivationUserUpdateRoleBody {
  role: {
    id: number;
  };
}
