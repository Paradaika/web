import styled from 'styled-components';

const StyledBody = styled('div')`
  display: flex;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledCountContainer = styled('div')`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: center;
`;

export const BodyStyles = { StyledBody, StyledCountContainer };
