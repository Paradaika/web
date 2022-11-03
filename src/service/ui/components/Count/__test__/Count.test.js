import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should show pause button on play', async () => {
    render(<Count />);

    const playButton = screen.getByRole('button', {
      name: /play/i
    });
    userEvent.click(playButton);

    const pauseButton = screen.getByRole('button', {
      name: /pause/i
    });

    expect(pauseButton).toBeInTheDocument();
  });

  it('should be a reset button', () => {
    render(<Count />);

    const resetButton = screen.getByRole('button', {
      name: /reset/i
    });

    expect(resetButton).toBeInTheDocument();
  });
});
