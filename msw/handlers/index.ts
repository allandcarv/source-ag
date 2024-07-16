import { cultivationUsersHandler } from './cultivation-users';
import { cultivationsHandler } from './cultivations';
import { cultivationsRolesHandler } from './cultivations-roles';
import { usersHandler } from './users';

export const HANDLERS = [
  cultivationsHandler,
  cultivationsRolesHandler,
  cultivationUsersHandler,
  usersHandler,
];
