import { http, HttpResponse } from 'msw';

import { URL } from '../../src/core/services/api';
import { CULTIVATION_USERS_RESPONSE } from '../fixtures/cultivation-users';

const getCultivationUsersPath = `${URL}cultivations/*/users`;

export const cultivationUsersHandler = http.get(getCultivationUsersPath, () =>
  HttpResponse.json(CULTIVATION_USERS_RESPONSE)
);
