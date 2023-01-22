import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

import { ThemeProvider } from 'styled-components';
import { ButtonStyles } from '../Button/Button.styles';
import { Styles as CountStyles } from './Count.styles';
import { themes } from 'domain/styles/themes';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count, fixedProgressPercentage } = useCount();

  const time = new Time(count / 100);

  const theme = themes.defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CountStyles.StyledBall>
        <Timer time={time} />
        <CountStyles.StyledButtonContainer>
          {isPaused ? (
            <ButtonStyles.StyledButtonSuccess name="play" onClick={playHandler}>
              Play
            </ButtonStyles.StyledButtonSuccess>
          ) : (
            <ButtonStyles.StyledButton name="pause" onClick={pauseHandler}>
              Pause
            </ButtonStyles.StyledButton>
          )}
          <ButtonStyles.StyledButtonError disabled={!isPaused} name="reset" onClick={resetHandler}>
            Reset
          </ButtonStyles.StyledButtonError>
        </CountStyles.StyledButtonContainer>
      </CountStyles.StyledBall>
    </ThemeProvider>
  );
};
