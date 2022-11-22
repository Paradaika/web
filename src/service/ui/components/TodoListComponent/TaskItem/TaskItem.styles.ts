import styled from 'styled-components';

const StyledTaskItem = styled('div')`
  display: flex;
  gap: 5px;
`;

const StyledCheckBox = styled('span')`
  align-self: center;
  aspect-ratio: 1/1;
  background-color: transparent;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.grey};
  cursor: pointer;
  display: block;
  height: 12px;
  width: 12px;
  &.done {
    background-color: ${props => props.theme.main};
    border-color: ${props => props.theme.background};
  }
`;

export const StylesTasksItem = { StyledTaskItem, StyledCheckBox };
