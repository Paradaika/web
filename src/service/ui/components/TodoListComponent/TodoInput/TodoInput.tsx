import React, { useRef } from 'react';
import { ITask } from '../TodoListComponent';
import { TodoInputStyles } from './TodoInput.styles';

import { v4 as uuidGenerator } from 'uuid';

interface Props {
  onAdd: (task: ITask) => void;
}

export const TodoInput = ({ onAdd }: Props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const todoFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: ITask = {
      id: uuidGenerator(),
      isDone: false,
      task: todoInputRef.current?.value || ''
    };
    onAdd(task);
    formRef.current?.reset();
  };
  return (
    <TodoInputStyles.StyledForm onSubmit={todoFormHandler} ref={formRef}>
      <input maxLength={30} name="todo" ref={todoInputRef} type="text" />
      <label htmlFor="todo">Insert tasks</label>
    </TodoInputStyles.StyledForm>
  );
};
