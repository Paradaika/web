import { render, screen } from '@testing-library/react';
import { TaskItem } from '../TaskItem';

describe('Task Item Component', () => {
  it('should render TaskItemComponent', () => {});
  render(<TaskItem id="1" isDone={false} onCheck={() => {}} task={'Dummy Task'} />);

  it('should render entered task text', () => {
    const TASK_TEST = 'TASK_1';

    render(<TaskItem id="1" isDone={false} onCheck={() => {}} task={TASK_TEST} />);

    const taskText = screen.getByText(TASK_TEST);

    expect(taskText).toHaveTextContent(TASK_TEST);
  });

  it('should have check button', () => {
    const TASK_TEST = 'TASK_1';
    render(<TaskItem id="1" isDone={false} onCheck={() => {}} task={TASK_TEST} />);

    const checkButton = screen.getByRole('button');

    expect(checkButton).toBeInTheDocument();
  });
});
