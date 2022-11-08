import { act, render, screen } from '@testing-library/react';
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

  it('should show minutes', () => {
    render(<Count />);

    const minutes = screen.getByLabelText('minutes');

    expect(minutes).toBeInTheDocument();
  });

  it('should show seconds', () => {
    render(<Count />);

    const seconds = screen.getByLabelText('seconds');

    expect(seconds).toBeInTheDocument('');
  });

  it('should decrement by one after click play and wait one second', async () => {
    render(<Count />);

    const seconds = screen.getByLabelText('seconds');

    const playButton = screen.getByRole('button', {
      name: /play/i
    });

    act(() => {
      userEvent.click(playButton);
    });

    await new Promise(r => setTimeout(r, 1000));

    expect(seconds).toHaveTextContent(59);
  });

  it('should reset to initial value on reset', async () => {
    render(<Count />);

    const seconds = screen.getByLabelText('seconds');
    const minutes = screen.getByLabelText('minutes');

    const initialSeconds = seconds.textContent;
    const initialMinutes = minutes.textContent;

    const playButton = screen.getByRole('button', {
      name: /play/i
    });

    act(() => {
      userEvent.click(playButton);
    });

    await new Promise(r => setTimeout(r, 1000));

    expect(seconds).toHaveTextContent(59);
    expect(minutes).toHaveTextContent(initialMinutes - 1);

    const pauseButton = screen.getByRole('button', {
      name: /pause/i
    });

    act(() => {
      userEvent.click(pauseButton);
    });

    const resetButton = screen.getByRole('button', {
      name: /reset/i
    });

    act(() => {
      userEvent.click(resetButton);
    });
    expect(seconds).toHaveTextContent(initialSeconds);
    expect(minutes).toHaveTextContent(initialMinutes);
  });
});
