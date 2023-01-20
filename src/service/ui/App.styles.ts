import styled, { createGlobalStyle } from 'styled-components';

import { ITheme } from 'domain/styles/themes';

interface Props {
  theme: ITheme;
}

const GlobalStyles = createGlobalStyle<Props>`
html  {
  background-color: ${props => props.theme.background};
  color:  ${({ theme }) => theme.black};
  margin: 0px;
  padding: 0px;
  min-height: 100%;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 200;
  display: flex;
  flex-direction: column;
}
 
body{
  flex: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
  

  #root{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
}

h1 {
  font-weight: 300;
}

h2{
  font-weight: 300;
}

form{
  position: relative;
}

input {
  height: 24px;
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.38);
  background-color: rgba(255, 255, 255, 0.95);
  background-color: transparent;
  color: white;
  position: absolute;
}

input:focus-visible {
  outline-color: transparent;
}
form h3 {
  margin-bottom: 3rem;
}


label {
  position: relative;
  bottom: -5px;
  right: -10px;
  transition: 0.3s;
}

input:hover + label,
input:focus-visible + label,
label:hover {
  bottom: 30px;
}



`;

const StyledApp = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Styles = { StyledApp, GlobalStyles };
