import { http, HttpResponse } from 'msw';

import { URL } from '../../src/core/services/api';
import { CULTIVATIONS_ROLES_RESPONSE } from '../fixtures/cultivations-roles';

const getCultivationsRolesPath = `${URL}cultivation-roles`;

export const cultivationsRolesHandler = http.get(getCultivationsRolesPath, () =>
  HttpResponse.json(CULTIVATIONS_ROLES_RESPONSE)
);
