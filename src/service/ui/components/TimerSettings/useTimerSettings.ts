import { keepNumberInRange } from 'application/utils/keepNumberInRange';
import { ISettings } from '@/domain/interfaces/ISettings';
import React, { useContext, useState } from 'react';
import { SettingsContext } from 'service/ui/components/SettingsContext/SettingsContext';

export const useTimerSettings = (onCloseModal: () => void) => {
  const { setSettings, settings } = useContext(SettingsContext);
  const localStoreInitialValues = settings;
  const [workTime, setWorkTime] = useState(() => localStoreInitialValues.workTime);
  const [shortRest, setShotRest] = useState(() => localStoreInitialValues.shortRest);
  const [longRest, setLongRest] = useState(() => localStoreInitialValues.longRest);

  const workTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setWorkTime(keepNumberInRange(value, 60, 0));
  };

  const shortRestChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setShotRest(keepNumberInRange(value, 15, 0));
  };
  const longRestChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setLongRest(keepNumberInRange(value, 60, 0));
  };

  const saveHandler = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
    event?.preventDefault();

    const newSettings: ISettings = {
      longRest,
      shortRest,
      workTime
    };

    setSettings(newSettings);
    onCloseModal();
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveHandler(undefined);
  };
  return { longRest, longRestChangeHandler, shortRest, shortRestChangeHandler, submitHandler, workTime, workTimeChangeHandler, saveHandler };
};
