import type { RoleDTO } from './role-dto';

export interface User {
  id: number;
  cultivationId: string;
  name: string;
  role: Omit<RoleDTO, 'description'>;
}
