import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { ButtonStyles } from '../Button/Button.styles';
import { TimerSettingsStyles } from './TimerSettings.styles';
import { ISettings } from '@/domain/interfaces/ISettings';
import { SettingsContext } from '../SettingsContext/SettingsContext';

const keepNumberInRange = (number: number, max: number, min: number) => {
  if (number >= max) return max;
  if (number <= min) return min;
  return number;
};

interface IProps {
  onCloseModal: () => void;
}

export const TimerSettings = ({ onCloseModal }: IProps) => {
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

  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TimerSettingsStyles.StyledTimerSettingsContainer onSubmit={submitHandler}>
        <h2>Settings</h2>
        <TimerSettingsStyles.StyledInputContainer>
          <input className="input" id="work-time" max={60} min={0} name="work-time" onChange={workTimeChangeHandler} type="number" value={workTime} />
          <p className="label">Work Time</p>
        </TimerSettingsStyles.StyledInputContainer>
        <TimerSettingsStyles.StyledInputContainer>
          <input
            className="input"
            id="short-rest"
            max={15}
            min={0}
            name="short-rest"
            onChange={shortRestChangeHandler}
            type="number"
            value={shortRest}
          />
          <p className="label">Short Rest</p>
        </TimerSettingsStyles.StyledInputContainer>
        <TimerSettingsStyles.StyledInputContainer>
          <input className="input" id="long-rest" max={60} min={0} name="long-rest" onChange={longRestChangeHandler} type="number" value={longRest} />
          <p className="label">Long Rest</p>
        </TimerSettingsStyles.StyledInputContainer>
        <div>
          <ButtonStyles.StyledButtonError>Reset</ButtonStyles.StyledButtonError>
          <ButtonStyles.StyledButtonBlack onClick={saveHandler}>Save</ButtonStyles.StyledButtonBlack>
        </div>
      </TimerSettingsStyles.StyledTimerSettingsContainer>
    </ThemeProvider>
  );
};
