import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { CountersComponentStyles } from './Counters.styles';
import { useState } from 'react';

export const Counters = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const todoListContainerDisplayHandler = () => {
    setIsCollapsed(prev => !prev);
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <CountersComponentStyles.CountersComponentContainer className={`${isCollapsed && 'collapsed'}`}>
        <CountersComponentStyles.CountersHeader className={`${isCollapsed && 'collapsed'}`} onClick={todoListContainerDisplayHandler}>
          Counters
        </CountersComponentStyles.CountersHeader>
        <CountersComponentStyles.CountersContainer>
          <p>Counter 1</p>
          <p>Counter 2</p>
        </CountersComponentStyles.CountersContainer>
      </CountersComponentStyles.CountersComponentContainer>
    </ThemeProvider>
  );
};
