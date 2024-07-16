import type { RoleDTO } from '../../src/interfaces/role-dto';

export const CULTIVATIONS_ROLES_RESPONSE: RoleDTO[] = [
  {
    description:
      'Can view and edit everything of the cultivation and manage the team.',
    id: 1,
    name: 'Head grower',
  },
  {
    description: 'Can view and edit everything of the cultivation.',
    id: 2,
    name: 'Grower',
  },
];
