import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  theme: ITheme;
}

const TodoListComponentContainer = styled('div')<Props>`
  display: flex;
  flex: 0.3;
  flex-direction: column;
  background-color: ${props => props.theme.glassBackgroundColor};
  border: 1px solid ${props => props.theme.glassBorderColor};
  border-radius: 5px 0px 5px 0px;
`;

const TodoListHeader = styled('h2')`
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.glassBorderColor};
  margin: 0;
  padding: 15px 0px 10px;
  background-color: ${props => props.theme.glassBackgroundColorDark};
`;

const TaskListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const TodoListComponentStyles = { TaskListContainer, TodoListComponentContainer, TodoListHeader };
