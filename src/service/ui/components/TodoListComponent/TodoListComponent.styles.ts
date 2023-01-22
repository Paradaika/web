import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  theme: ITheme;
}

const TodoListComponentContainer = styled('div')<Props>`
  display: flex;
  flex: 0.3;
  flex-direction: column;
  border-radius: 5px 0px 5px 0px;

  transition: transform 0.7s ease-out;

  background: #e0e0e0;
  background: #e0e0e0;
  box-shadow: -26px 26px 53px #bebebe, 26px -26px 53px #ffffff;
  &.collapsed {
    transform: translateX(80%);
  }
`;

const TodoListHeader = styled('h2')`
  text-align: center;
  margin: 0;
  padding: 15px 0px 10px;
  &.collapsed {
    align-self: flex-start;
    transform: rotate(90deg) translateX(50%) translateY(70%);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const TaskListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  &.collapsed {
    visibility: hidden;
  }
`;

export const TodoListComponentStyles = { TaskListContainer, TodoListComponentContainer, TodoListHeader };
