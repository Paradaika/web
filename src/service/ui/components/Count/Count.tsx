import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

import { Styles as ButtonStyles } from '../Button/Button.styles';
import { Styles as CountStyles } from './Count.styles';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count, fixedProgressPercentage } = useCount();

  const time = new Time(count / 100);

  return (
    <CountStyles.StyledCount counterPercentage={fixedProgressPercentage + '%'}>
      <Timer time={time} />
      <div>
        {isPaused ? (
          <ButtonStyles.StyledButton name="play" onClick={playHandler} style={{ color: '#50D774' }}>
            Play
          </ButtonStyles.StyledButton>
        ) : (
          <ButtonStyles.StyledButton name="pause" onClick={pauseHandler} style={{ color: '#ff262a' }}>
            Pause
          </ButtonStyles.StyledButton>
        )}
        <ButtonStyles.StyledButton disabled={!isPaused} name="reset" onClick={resetHandler}>
          Reset
        </ButtonStyles.StyledButton>
      </div>
    </CountStyles.StyledCount>
  );
};
