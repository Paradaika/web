import { useCallback, useEffect, useState } from 'react';

import { subtract } from 'domain/operations/subtract';

export const useCount = (initialMilliseconds: number) => {
  const [isPaused, setIsPaused] = useState(true);
  const [count, setCount] = useState(initialMilliseconds);

  const countdown = () => {
    setCount(subtract);
  };

  const playHandler = () => {
    setIsPaused(false);
  };

  const pauseHandler = () => {
    setIsPaused(true);
  };

  const reset = () => {
    setCount(initialMilliseconds);
  };

  const resetHandler = () => {
    if (isPaused) reset();
  };

  const countDownHandler = useCallback(() => {
    if (count === 0) {
      setIsPaused(true);
    }
    if (count > 0 && !isPaused) countdown();
  }, [count, isPaused]);

  useEffect(() => {
    setTimeout(() => countDownHandler(), 10);
  }, [count, countDownHandler]);

  useEffect(() => {
    setCount(initialMilliseconds);
  }, [initialMilliseconds]);

  return { pauseHandler, resetHandler, playHandler, count, isPaused };
};
