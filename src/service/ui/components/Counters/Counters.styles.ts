import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  theme: ITheme;
}

const CountersComponentContainer = styled('div')<Props>`
  background: linear-gradient(315deg, #cacaca, #f0f0f0);
  border-radius: 0px 5px 0px 5px;
  box-shadow: 26px 26px 53px #bebebe, -26px -26px 53px #ffffff;
  display: flex;
  flex-direction: column;
  flex: 0.3;
  transition: transform 0.7s ease-out;

  &.collapsed {
    transform: translateX(-80%);
  }
`;

const CountersHeader = styled('h2')`
  text-align: center;
  margin: 0;
  padding: 15px 0px 10px;

  &.collapsed {
    align-self: flex-end;
    transform: rotate(-90deg) translateX(-50%) translateY(50%);
    background-color: transparent;
    cursor: pointer;
  }
`;

const CountersForm = styled('form')`
  margin: 1rem;
  margin-bottom: 15px;
`;

const CountersContainer = styled('div')`
  &.timeTrackerInput {
    position: relative;
  }
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-left: 15px;
  padding-top: 20px;
`;

export const CountersComponentStyles = { CountersComponentContainer, CountersForm, CountersContainer, CountersHeader };
