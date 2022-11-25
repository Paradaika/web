import { render } from '@testing-library/react';
import { TaskItem } from '../TaskItem';

describe('Task Item Component', () => {
  it('should render TaskItemComponent', () => {});
  render(<TaskItem id="1" isDone={false} onCheck={() => {}} task={'Dummy Task'} />);
});
