import { themes } from 'domain/styles/themes';
import { ThemeProvider } from 'styled-components';
import TodoInput from 'service/ui/components/TodoListComponent/TodoInput';

import { TodoListComponentStyles } from './TodoListComponent.styles';
import { useState } from 'react';
import TaskItem from './TaskItem';

export interface ITask {
  id: string;
  task: string;
  isDone: boolean;
}

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const appendTask = (task: ITask) => {
    setTodoList(currentTaskList => [task, ...currentTaskList]);
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TodoListComponentStyles.TodoListComponentContainer>
        <TodoListComponentStyles.TodoListHeader>Todo List</TodoListComponentStyles.TodoListHeader>
        <TodoInput onAdd={appendTask} />
        {todoList.map(task => {
          return <TaskItem id={task.id} isDone={task.isDone} key={task.id} task={task.task} />;
        })}
      </TodoListComponentStyles.TodoListComponentContainer>
    </ThemeProvider>
  );
};
