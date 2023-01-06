import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  theme: ITheme;
}

const CountersComponentContainer = styled('div')<Props>`
  display: flex;
  flex: 0.3;
  flex-direction: column;
  background-color: ${props => props.theme.glassBackgroundColor};
  border: 1px solid ${props => props.theme.glassBorderColor};
  border-radius: 0px 5px 0px 5px;

  transition: transform 0.7s ease-out;

  &.collapsed {
    transform: translateX(-80%);
  }
`;

const CountersHeader = styled('h2')`
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.glassBorderColor};
  margin: 0;
  padding: 15px 0px 10px;
  background-color: ${props => props.theme.glassBackgroundColorDark};

  &.collapsed {
    align-self: flex-end;
    transform: rotate(-90deg) translateX(-50%) translateY(50%);
    background-color: transparent;
    cursor: pointer;
  }
`;

const CountersContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-top: 20px;
`;

export const CountersComponentStyles = { CountersComponentContainer, CountersContainer, CountersHeader };
