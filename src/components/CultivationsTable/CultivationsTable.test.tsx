import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '../../routeTree.gen';

const router = createRouter({ routeTree });

describe('CultivationsTable', () => {
  it('should have a cultivations table', async () => {
    render(<RouterProvider router={router} />);

    const table = await screen.findByRole('table');
    const thead = await screen.findByRole('rowgroup', {
      name: 'table head',
    });
    const tbody = await screen.findByRole('rowgroup', {
      name: 'table body',
    });
    const tfoot = await screen.findByRole('rowgroup', {
      name: 'table foot',
    });

    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
    expect(tfoot).toBeInTheDocument();
  });

  it('should navigate to a cultivation page', async () => {
    render(<RouterProvider router={router} />);

    const link = await screen.findByRole('link', { name: 'first cultivation' });

    await userEvent.click(link);

    const title = await screen.findByRole('heading', {
      level: 1,
      name: /cultivation team - first cultivation/i,
    });

    expect(title).toBeInTheDocument();
  });
});
