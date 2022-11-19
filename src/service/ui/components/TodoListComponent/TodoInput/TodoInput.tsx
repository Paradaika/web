import React, { useRef } from 'react';
import { TodoInputStyles } from './TodoInput.styles';

export const TodoInput = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const todoFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('todoInputRef', todoInputRef.current?.value);
    formRef.current?.reset();
  };
  return (
    <TodoInputStyles.StyledForm onSubmit={todoFormHandler} ref={formRef}>
      <input name="todo" ref={todoInputRef} type="text" />
      <label htmlFor="todo">Insert tasks</label>
    </TodoInputStyles.StyledForm>
  );
};
