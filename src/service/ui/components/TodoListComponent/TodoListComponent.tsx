import { themes } from 'domain/styles/themes';
import { ThemeProvider } from 'styled-components';
import TodoInput from 'service/ui/components/TodoListComponent/TodoInput';

import { TodoListComponentStyles } from './TodoListComponent.styles';

export const TodoListComponent = () => {
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TodoListComponentStyles.TodoListComponentContainer>
        <TodoListComponentStyles.TodoListHeader>Todo List</TodoListComponentStyles.TodoListHeader>
        <TodoInput />
      </TodoListComponentStyles.TodoListComponentContainer>
    </ThemeProvider>
  );
};
