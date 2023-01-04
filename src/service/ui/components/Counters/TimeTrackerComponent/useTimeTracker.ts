import { useCallback, useEffect, useState } from 'react';

import { add } from 'domain/operations/add';
import { Time } from 'domain/Time/Time';

export const useTimeTracker = () => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const countAdd = () => {
    setCount(add);
  };

  const playHandler = () => {
    setIsPaused(false);
  };

  const pauseHandler = () => {
    setIsPaused(true);
  };

  const reset = () => {
    setCount(0);
  };

  const resetHandler = () => {
    if (isPaused) reset();
  };

  const countDownHandler = useCallback(() => {
    if (!isPaused) countAdd();
  }, [count, isPaused]);

  useEffect(() => {
    setTimeout(() => countDownHandler(), 10);
  }, [count, countDownHandler]);

  const time = new Time(count / 100);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  return { minutes, seconds, hours, isPaused, pauseHandler, playHandler, resetHandler };
};
