import { render, screen } from '@testing-library/react';
import { Count } from '../Count';

describe('Count', () => {
  it('should render Count component', () => {
    render(<Count />);
  });

  it('should be a play button', () => {
    render(<Count />);

    const playButton = screen.getByRole('button', {
      name: /play/i
    });

    expect(playButton).toBeInTheDocument();
  });
});
