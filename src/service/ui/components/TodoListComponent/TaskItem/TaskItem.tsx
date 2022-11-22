import { themes } from 'domain/styles/themes';
import React from 'react';
import { StylesTasksItem } from './TaskItem.styles';

export interface ITask {
  id: string;
  task: string;
  isDone: boolean;
}

export const TaskItem = ({ isDone, task }: ITask) => {
  return (
    <StylesTasksItem.StyledTaskItem>
      <StylesTasksItem.StyledCheckBox className={isDone ? 'done' : ''} theme={themes.defaultTheme} />
      {task}
    </StylesTasksItem.StyledTaskItem>
  );
};
