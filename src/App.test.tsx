import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render first page', () => {
    render(<App />);

    const title = screen.getByRole('heading', {
      level: 1,
      name: 'Vite + React',
    });

    expect(title).toBeInTheDocument();
  });
});
