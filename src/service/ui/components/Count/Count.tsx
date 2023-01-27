import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

import { ThemeProvider } from 'styled-components';
import { ButtonStyles } from '../Button/Button.styles';
import { Styles as CountStyles } from './Count.styles';
import { themes } from 'domain/styles/themes';

import { BsPlay, BsArrowCounterclockwise, BsPause } from 'react-icons/bs';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count } = useCount();

  const time = new Time(count / 100);

  const theme = themes.defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CountStyles.StyledBall>
        <Timer time={time} />
        <CountStyles.StyledButtonContainer>
          {isPaused ? (
            <ButtonStyles.StyledButtonSuccess className="icon-container" data-testid="play-button" name="play" onClick={playHandler}>
              <BsPlay style={{ height: '100%', width: '100%' }} />
            </ButtonStyles.StyledButtonSuccess>
          ) : (
            <ButtonStyles.StyledButton className="icon-container" data-testid="pause-button" name="pause" onClick={pauseHandler}>
              <BsPause style={{ height: '100%', width: '100%' }} />
            </ButtonStyles.StyledButton>
          )}
          <ButtonStyles.StyledButtonError
            className="icon-container"
            data-testid="reset-button"
            disabled={!isPaused}
            name="reset"
            onClick={resetHandler}
          >
            <BsArrowCounterclockwise style={{ height: '100%', width: '100%' }} />
          </ButtonStyles.StyledButtonError>
        </CountStyles.StyledButtonContainer>
      </CountStyles.StyledBall>
    </ThemeProvider>
  );
};
