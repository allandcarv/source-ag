import type { CultivationUserDTO } from '../../interfaces/cultivation-user-dto';
import type { User } from '../../interfaces/user';

export const parseUserData = (cultivationUser: CultivationUserDTO): User => {
  return {
    id: cultivationUser.user.id,
    name: cultivationUser.user.name,
    cultivationId: cultivationUser.cultivation_id,
    role: cultivationUser.role,
  };
};
