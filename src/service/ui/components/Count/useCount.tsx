import { useCallback, useEffect, useState } from 'react';

import { subtract } from 'domain/operations/subtract';

import { INITIAL_VALUE_25 } from 'domain/initialValues/initialValues';

export const useCount = () => {
  const [count, setCount] = useState(INITIAL_VALUE_25);
  const [isPaused, setIsPaused] = useState(true);

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
    setCount(INITIAL_VALUE_25);
  };

  const resetHandler = () => {
    if (isPaused) reset();
  };

  const countDownHandler = useCallback(() => {
    if (count! > 0 && !isPaused) countdown();
  }, [count, isPaused]);

  useEffect(() => {
    setTimeout(() => countDownHandler(), 1000);
  }, [count, countDownHandler]);
  return { pauseHandler, resetHandler, playHandler, count, isPaused };
};
