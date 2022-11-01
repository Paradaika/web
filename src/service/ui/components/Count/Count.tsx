import { useCount } from './useCount';

export const Count = () => {
  const { pauseHandler, playHandler, resetHandler, count, isPaused } = useCount();

  return (
    <div>
      <p>{count}</p>
      {isPaused ? <button onClick={playHandler}>Play</button> : <button onClick={pauseHandler}>Pause</button>}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};
