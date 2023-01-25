import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  counterPercentage: string;
  theme: ITheme;
}

const StyledBall = styled('div')`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 100%;
  background: linear-gradient(315deg, #cacaca, #f0f0f0);
  box-shadow: -15px -15px 30px #bebebe, 15px 15px 30px #ffffff;
`;

const StyledCount = styled('div')<Props>`
  align-items: center;
  aspect-ratio: 1/1;
  background: radial-gradient(closest-side, ${prop => prop.theme.background} 97%, transparent 0 99.9%, ${prop => prop.theme.glassBorderColor} 0),
    conic-gradient(${prop => prop.theme.success} ${props => props.counterPercentage}, ${prop => prop.theme.background} 0);
  border-radius: 50%;
  display: flex;
  display: grid;
  flex-direction: column;
  padding: 2rem;
  place-items: center;
  width: 50%;
`;

const StyledButtonContainer = styled('div')`
  display: flex;
  gap: 5;

  .icon-container {
    color: #030303;
    padding: 5px;
    height: 3rem;
  }
`;

const IconsContainer = styled('button')`
  width: 4rem;
  height: 2rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Styles = { StyledBall, StyledButtonContainer, StyledCount, IconsContainer };
