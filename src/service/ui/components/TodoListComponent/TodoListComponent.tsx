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

  const sortDoneLast = (a: ITask, b: ITask) => {
    return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1;
  };

  const changeTaskDoneStatus = (taskId: string) => {
    setTodoList(prevList => {
      const selectedTask = prevList.filter(task => task.id === taskId);
      const notSelectedTasks = prevList.filter(task => task.id !== taskId);
      const allTasks = [...notSelectedTasks, { ...selectedTask[0], isDone: !selectedTask[0].isDone }];

      return allTasks.sort(sortDoneLast);
    });
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TodoListComponentStyles.TodoListComponentContainer>
        <TodoListComponentStyles.TodoListHeader>Todo List</TodoListComponentStyles.TodoListHeader>
        <TodoInput onAdd={appendTask} />
        {todoList.map(task => {
          return <TaskItem id={task.id} isDone={task.isDone} key={task.id} task={task.task} onCheck={changeTaskDoneStatus} />;
        })}
      </TodoListComponentStyles.TodoListComponentContainer>
    </ThemeProvider>
  );
};
