import { createContext, ReactNode, useState } from 'react';

export const TimerCyclesContext = createContext({
  timerCount: 0,
  addOneCount: () => {}
});

interface IProps {
  children: ReactNode;
}

export const TimerCyclesContextProvider = ({ children }: IProps) => {
  const [timerCount, setTimerCount] = useState(0);

  const addOneCount = () => {
    setTimerCount(currentCount => currentCount++);
  };

  return <TimerCyclesContext.Provider value={{ timerCount, addOneCount }}>{children}</TimerCyclesContext.Provider>;
};
