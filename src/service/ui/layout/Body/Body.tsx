import { useCallback, useEffect, useState } from 'react';

export const Body = () => {
  const [count, setCount] = useState<number>(25);

  const countDown = () => {
    setCount(prevNumber => {
      return prevNumber - 1;
    });
  };

  const countDownHandler = useCallback(() => {
    if (count! > 0) countDown();
  }, [count]);

  useEffect(() => {
    setTimeout(() => countDownHandler(), 1000);
  }, [count, countDownHandler]);

  return <div>{count}</div>;
};
