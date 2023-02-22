import { useCallback, useContext, useEffect, useState } from 'react';

import { subtract } from 'domain/operations/subtract';
import { ISettings } from 'domain/interfaces/ISettings';

import { countFinishHandler } from 'application/countActions/countFinishHandler';
import { minutesToMillisecondsConverter } from 'application/utils/minutesToMillisecondsConverter';

import { TimerCyclesContext } from 'service/ui/components/TimerCyclesContext/TimerCyclesContext';
import { SettingsContext } from 'service/ui/components/SettingsContext/SettingsContext';

interface IProps {
  timerCount: number;
  settings: ISettings;
}
const getInitialTime = ({ timerCount, settings }: IProps) => {
  if (timerCount % 4 === 0) return settings.longRest;
  if (timerCount % 2 === 0) return settings.workTime;
  return settings.shortRest;
};

export const useCount = () => {
  const { timerCount, addOneCount } = useContext(TimerCyclesContext);
  const { settings } = useContext(SettingsContext);

  const initialTimeInMilliseconds = minutesToMillisecondsConverter(getInitialTime({ timerCount, settings }));
  const [isPaused, setIsPaused] = useState(true);
  const [count, setCount] = useState(initialTimeInMilliseconds);

  countFinishHandler({ count, addCount: addOneCount });

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
    setCount(initialTimeInMilliseconds);
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
    setCount(initialTimeInMilliseconds);
  }, [initialTimeInMilliseconds]);

  return { pauseHandler, resetHandler, playHandler, count, isPaused };
};
