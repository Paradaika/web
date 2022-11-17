import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

import { ThemeProvider } from 'styled-components';
import { Styles as ButtonStyles } from '../Button/Button.styles';
import { Styles as CountStyles } from './Count.styles';
import { themes } from 'domain/styles/themes';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count, fixedProgressPercentage } = useCount();

  const time = new Time(count / 100);

  const theme = themes.defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CountStyles.StyledCount counterPercentage={fixedProgressPercentage + '%'}>
        <Timer time={time} />
        <div>
          {isPaused ? (
            <ButtonStyles.StyledButtonSuccess name="play" onClick={playHandler}>
              Play
            </ButtonStyles.StyledButtonSuccess>
          ) : (
            <ButtonStyles.StyledButtonError name="pause" onClick={pauseHandler}>
              Pause
            </ButtonStyles.StyledButtonError>
          )}
          <ButtonStyles.StyledButton disabled={!isPaused} name="reset" onClick={resetHandler}>
            Reset
          </ButtonStyles.StyledButton>
        </div>
      </CountStyles.StyledCount>
    </ThemeProvider>
  );
};
