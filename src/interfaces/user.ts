import type { Role } from './cultivation-user-dto';

export interface User {
  id: number;
  cultivationId: string;
  name: string;
  role: Role;
}
