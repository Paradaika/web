import { useCount } from './useCount';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, count, isPaused } = useCount();

  return (
    <div>
      <p aria-label="count" className="count">
        {count}
      </p>
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
