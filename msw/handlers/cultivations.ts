import { http, HttpResponse } from 'msw';

import { URL } from '../../src/core/services/api';
import { CULTIVATIONS_RESPONSE } from '../fixtures/cultivations';

const getCultivationsPath = `${URL}cultivations`;

export const cultivationsHandler = http.get(getCultivationsPath, () =>
  HttpResponse.json(CULTIVATIONS_RESPONSE)
);
