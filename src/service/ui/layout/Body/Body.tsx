import Count from 'service/ui/components/Count';
import TodoListComponent from 'service/ui/components/TodoListComponent';

import Counters from 'service/ui/components/Counters';
import { SettingsContextProvider } from 'service/ui/components/SettingsContext/SettingsContext';

import { BodyStyles } from './Body.styles';
import { TimerCyclesContextProvider } from '../../components/TimerCyclesContext/TimerCyclesContext';

export const Body = () => {
  return (
    <BodyStyles.StyledBody>
      <Counters />
      <BodyStyles.StyledCountContainer>
        <TimerCyclesContextProvider>
          <SettingsContextProvider>
            <Count />
          </SettingsContextProvider>
        </TimerCyclesContextProvider>
      </BodyStyles.StyledCountContainer>
      <TodoListComponent />
    </BodyStyles.StyledBody>
  );
};
