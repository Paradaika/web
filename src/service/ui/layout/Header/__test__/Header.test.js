import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
  });

  it('should show Paradaika', () => {
    render(<Header />);

    const title = screen.getByRole('heading');

    expect(title.textContent).toBe('Paradaika');
  });
});
