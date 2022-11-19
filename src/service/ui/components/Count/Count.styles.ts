import { ITheme } from '@/domain/styles/themes';
import styled from 'styled-components';

interface Props {
  counterPercentage: string;
  theme: ITheme;
}

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
  width: fit-content;
`;

export const Styles = { StyledCount };
