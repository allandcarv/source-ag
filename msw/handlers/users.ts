import { http, HttpResponse } from 'msw';

import { URL } from '../../src/core/services/api';
import { USERS_RESPONSE } from '../fixtures/users';

const getUsersPath = `${URL}users`;

export const usersHandler = http.get(getUsersPath, () =>
  HttpResponse.json(USERS_RESPONSE)
);
