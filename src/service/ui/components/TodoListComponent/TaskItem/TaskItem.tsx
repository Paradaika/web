import { themes } from 'domain/styles/themes';
import React from 'react';
import { StylesTasksItem } from './TaskItem.styles';

export interface Props {
  id: string;
  task: string;
  isDone: boolean;
  onCheck: (taskId: string) => void;
}

export const TaskItem = ({ isDone, task, onCheck, id }: Props) => {
  const checkListHandler = () => {
    onCheck(id);
  };

  return (
    <StylesTasksItem.StyledTaskItem>
      <StylesTasksItem.StyledCheckBox className={isDone ? 'done' : ''} onClick={checkListHandler} theme={themes.defaultTheme} />
      <StylesTasksItem.StyledParagraph className={isDone ? 'done' : ''}>{task}</StylesTasksItem.StyledParagraph>
    </StylesTasksItem.StyledTaskItem>
  );
};
