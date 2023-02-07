import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { ButtonStyles } from '../Button/Button.styles';
import { TimerSettingsStyles } from './TimerSettings.styles';

const keepNumberInRange = (number: number, max: number, min: number) => {
  if (number >= max) return max;
  if (number <= min) return min;
  return number;
};

export const TimerSettings = () => {
  const [workTime, setWorkTime] = useState(25);
  const [shortRest, setShotRest] = useState(5);
  const [longRest, setLongRest] = useState(20);

  const workTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setWorkTime(keepNumberInRange(value, 60, 0));
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <TimerSettingsStyles.StyledTimerSettingsContainer>
        <h2>Settings</h2>
        <TimerSettingsStyles.StyledInputContainer>
          <input className="input" id="work-time" max={60} min={0} name="work-time" onChange={workTimeChangeHandler} type="number" value={workTime} />
          <p className="label">Work Time</p>
        </TimerSettingsStyles.StyledInputContainer>
        <TimerSettingsStyles.StyledInputContainer>
          <input className="input" id="short-rest" max={15} min={5} name="short-rest" type="number" />
          <p className="label">Short Rest</p>
        </TimerSettingsStyles.StyledInputContainer>
        <TimerSettingsStyles.StyledInputContainer>
          <input className="input" id="long-rest" max={60} min={5} name="long-rest" type="number" />
          <p className="label">Long Rest</p>
        </TimerSettingsStyles.StyledInputContainer>
        <div>
          <ButtonStyles.StyledButtonError>Reset</ButtonStyles.StyledButtonError>
          <ButtonStyles.StyledButtonBlack>Save</ButtonStyles.StyledButtonBlack>
        </div>
      </TimerSettingsStyles.StyledTimerSettingsContainer>
    </ThemeProvider>
  );
};
