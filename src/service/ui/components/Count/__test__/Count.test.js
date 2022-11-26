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

  it('should show pause button on plays', async () => {
    act(() => {
      render(<Count />);
    });

    const playButton = screen.getByRole('button', {
      name: /play/i
    });

    act(() => {
      userEvent.click(playButton);
    });

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
    act(() => {
      render(<Count />);
    });

    const playButton = screen.getByRole('button', {
      name: /play/i
    });
    await act(async () => {
      userEvent.click(playButton);
      await new Promise(r => setTimeout(r, 1000));
    });

    // const seconds = await screen.findByAltText('seconds');
    const seconds = await screen.findByText(59);

    expect(seconds).toHaveTextContent(59);
  });

  it('should reset to initial value on reset', async () => {
    act(() => {
      render(<Count />);
    });

    const initMinutes = screen.getByLabelText('minutes');
    const initSeconds = screen.getByLabelText('seconds');

    const initialSeconds = initSeconds.textContent;
    const initialMinutes = initMinutes.textContent;

    const playButton = screen.getByRole('button', {
      name: /play/i
    });

    await act(async () => {
      userEvent.click(playButton);
      await new Promise(r => setTimeout(r, 1000));
    });

    // const seconds = await screen.findByAltText('seconds');
    const seconds = await screen.findByText(59);
    const minutes = await screen.findByLabelText('minutes');

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
