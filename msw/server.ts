import { setupServer } from 'msw/node';

import { HANDLERS } from './handlers';

export const mswServer = setupServer(...HANDLERS);
