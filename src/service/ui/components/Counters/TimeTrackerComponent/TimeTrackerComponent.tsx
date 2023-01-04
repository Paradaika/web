import { useTimeTracker } from './useTimeTracker';

export const TimeTrackerComponent = () => {
  const { hours, isPaused, minutes, pauseHandler, playHandler, resetHandler, seconds } = useTimeTracker();
  return (
    <div>
      <p>seconds: {seconds}</p>
      <p>hours: {hours}</p>
      <button onClick={playHandler}>Play</button>
      <button onClick={pauseHandler}>Pause</button>
    </div>
  );
};
