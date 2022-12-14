import { useRef } from 'react';

import { ITask } from 'domain/interfaces/ITask';

import { TodoInputStyles } from './TodoInput.styles';
interface Props {
  onAdd: (task: ITask) => void;
  className?: string;
}

export const TodoInput = ({ onAdd, className }: Props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const todoFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: ITask = {
      id: crypto.randomUUID(),
      isDone: false,
      task: todoInputRef.current?.value || ''
    };
    onAdd(task);
    formRef.current?.reset();
  };
  return (
    <TodoInputStyles.StyledForm className={className} onSubmit={todoFormHandler} ref={formRef}>
      <input maxLength={30} name="todo" ref={todoInputRef} type="text" />
      <label htmlFor="todo">Insert tasks</label>
    </TodoInputStyles.StyledForm>
  );
};
