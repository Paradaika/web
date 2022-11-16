import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

import { Styles as ButtonStyles } from '../Button/Button.styles';
import { Styles as CountStyles } from './Count.styles';
import { themes } from 'domain/styles/themes';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count, fixedProgressPercentage } = useCount();

  const time = new Time(count / 100);

  const theme = themes.defaultTheme;

  return (
    <CountStyles.StyledCount counterPercentage={fixedProgressPercentage + '%'}>
      <Timer time={time} />
      <div>
        {isPaused ? (
          <ButtonStyles.StyledButton name="play" onClick={playHandler} theme={theme} typeOfButton={'success'}>
            Play
          </ButtonStyles.StyledButton>
        ) : (
          <ButtonStyles.StyledButton name="pause" onClick={pauseHandler} style={{ color: '#ff262a' }} theme={theme}>
            Pause
          </ButtonStyles.StyledButton>
        )}
        <ButtonStyles.StyledButton disabled={!isPaused} name="reset" onClick={resetHandler} theme={theme}>
          Reset
        </ButtonStyles.StyledButton>
      </div>
    </CountStyles.StyledCount>
  );
};
