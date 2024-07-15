export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
}

export interface CultivationUserDTO {
  cultivation_id: string;
  role: Role;
  user: User;
}

export interface CultivationUserRequestBody {
  role: Pick<Role, 'id'>;
  user: Pick<User, 'id'>;
}
