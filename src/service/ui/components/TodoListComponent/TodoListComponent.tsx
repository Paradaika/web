import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { useTodoListComponent } from './useTodoListComponent';

import TaskItem from 'service/ui/components/TodoListComponent/TaskItem';
import TodoInput from 'service/ui/components/TodoListComponent/TodoInput';

import { TodoListComponentStyles } from './TodoListComponent.styles';
import { useState } from 'react';

export const TodoListComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { appendTask, changeTaskDoneStatus, todoList } = useTodoListComponent();

  const todoListContainerDisplayHandler = () => {
    setIsCollapsed(prev => !prev);
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TodoListComponentStyles.TodoListComponentContainer className={`${isCollapsed && 'collapsed'}`}>
        <TodoListComponentStyles.TodoListHeader className={`${isCollapsed && 'collapsed'}`} onClick={todoListContainerDisplayHandler}>
          Todo List
        </TodoListComponentStyles.TodoListHeader>
        <TodoListComponentStyles.TaskListContainer className={`${isCollapsed && 'collapsed'}`}>
          <TodoInput onAdd={appendTask} />
          {todoList.map(task => {
            return <TaskItem id={task.id} isDone={task.isDone} key={task.id} onCheck={changeTaskDoneStatus} task={task.task} />;
          })}
        </TodoListComponentStyles.TaskListContainer>
      </TodoListComponentStyles.TodoListComponentContainer>
    </ThemeProvider>
  );
};
