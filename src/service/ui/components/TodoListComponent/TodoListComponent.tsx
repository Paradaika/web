import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { useTodoListComponent } from './useTodoListComponent';

import TaskItem from 'service/ui/components/TodoListComponent/TaskItem';
import TodoInput from 'service/ui/components/TodoListComponent/TodoInput';

import { TodoListComponentStyles } from './TodoListComponent.styles';

export const TodoListComponent = () => {
  const { appendTask, changeTaskDoneStatus, todoList } = useTodoListComponent();
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TodoListComponentStyles.TodoListComponentContainer>
        <TodoListComponentStyles.TodoListHeader>Todo List</TodoListComponentStyles.TodoListHeader>
        <TodoInput onAdd={appendTask} />
        <TodoListComponentStyles.TaskListContainer>
          {todoList.map(task => {
            return <TaskItem id={task.id} isDone={task.isDone} key={task.id} task={task.task} onCheck={changeTaskDoneStatus} />;
          })}
        </TodoListComponentStyles.TaskListContainer>
      </TodoListComponentStyles.TodoListComponentContainer>
    </ThemeProvider>
  );
};
