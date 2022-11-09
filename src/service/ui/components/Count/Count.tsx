import { Timer } from './Timer/Timer';

import { useCount } from './useCount';

import { Time } from 'domain/Time/Time';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, isPaused, count } = useCount();

  const time = new Time(count / 100);

  return (
    <div>
      <Timer time={time} />
      {isPaused ? (
        <button name="play" onClick={playHandler}>
          Play
        </button>
      ) : (
        <button name="pause" onClick={pauseHandler}>
          Pause
        </button>
      )}
      <button name="reset" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
