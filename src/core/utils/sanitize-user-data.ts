import type { CultivationUserDTO } from '../../interfaces/cultivation-user-dto';
import type { UserDTO } from '../../interfaces/user-dto';

export const sanitizeUserData = (
  users: UserDTO[],
  cultivatioUser: CultivationUserDTO
): CultivationUserDTO => {
  const sanitizedUserData = {
    ...cultivatioUser,
    user: { ...cultivatioUser.user, id: +cultivatioUser.user.id },
  };

  if (!sanitizedUserData.user.name) {
    const user = users.find((user) => user.id === sanitizedUserData.user.id);

    sanitizedUserData.user.name = user?.name ?? '';
  }

  return sanitizedUserData;
};
