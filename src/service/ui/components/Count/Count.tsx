import { Time } from 'domain/Time/Time';
import { useCount } from './useCount';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, count, isPaused } = useCount();
  const time = new Time(count / 100);
  return (
    <div>
      <div aria-label="count" className="count">
        <p aria-label="minutes" className="minutes">
          {time.getMinutes()}
        </p>
        <p aria-label="seconds" className="seconds">
          {time.getSeconds()}
        </p>
      </div>
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
