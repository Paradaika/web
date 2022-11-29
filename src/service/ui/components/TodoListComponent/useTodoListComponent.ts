import { useState } from 'react';

import { ITask } from 'domain/interfaces/ITask';

export const useTodoListComponent = () => {
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
  return { todoList, appendTask, changeTaskDoneStatus };
};
