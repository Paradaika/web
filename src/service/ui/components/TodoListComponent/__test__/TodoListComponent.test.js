import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoListComponent } from '../TodoListComponent';

beforeEach(() => {
  render(<TodoListComponent />);
  const header = screen.getByRole('heading', {
    name: /todo list/i
  });

  userEvent.click(header);
});

describe('Todo List Component', () => {
  it('should render TodoListComponent', () => {
    render(<TodoListComponent />);
  });
  it('should be input component', () => {
    render(<TodoListComponent />);

    const inputComponent = screen.getByRole('textbox');

    expect(inputComponent).toBeInTheDocument();
  });

  it('should add task in the component', async () => {
    render(<TodoListComponent />);
    const INPUT_TEXT = 'Task_1';
    const inputComponent = screen.getByRole('textbox');

    // crypto.randomUUID = jest.fn(() => {
    //   return '123456';
    // });

    global.crypto = {
      randomUUID: function () {
        return '1234';
      }
    };

    userEvent.type(inputComponent, INPUT_TEXT);
    userEvent.type(inputComponent, '{enter}');

    const task = await screen.findByText(INPUT_TEXT);

    expect(task).toBeInTheDocument();
    expect(task).toHaveTextContent(INPUT_TEXT);
  });
});
