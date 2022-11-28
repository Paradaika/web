import { render, screen } from '@testing-library/react';

import { TaskItem } from '../TaskItem';

import { themes } from 'domain/styles/themes';

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

  it('should have yellow color on done task buttons', () => {
    const TASK_TEST = 'TASK_1';
    const expectedStyles = `backgroundColor: ${themes.defaultTheme}`;
    render(<TaskItem id="1" isDone={true} onCheck={() => {}} task={TASK_TEST} />);

    const checkButton = screen.getByRole('button');

    expect(checkButton).toHaveStyle(expectedStyles);
  });

  it('should line the text on done', () => {
    const TASK_TEST = 'TASK_1';
    const expectedStyles = `text-decoration: line-through`;
    render(<TaskItem id="1" isDone={true} onCheck={() => {}} task={TASK_TEST} />);

    const checkButton = screen.getByText(TASK_TEST);

    expect(checkButton).toHaveStyle(expectedStyles);
  });
});
