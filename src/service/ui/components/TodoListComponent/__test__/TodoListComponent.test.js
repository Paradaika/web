import { render } from '@testing-library/react';
import { TodoListComponent } from '../TodoListComponent';

describe('Todo List Component', () => {
  it('should render TodoListComponent', () => {
    render(<TodoListComponent />);
  });
});
