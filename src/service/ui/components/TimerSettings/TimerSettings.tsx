import React from 'react';

import { TimerSettingsStyles } from './TimerSettings.styles';

export const TimerSettings = () => {
  return (
    <TimerSettingsStyles.StyledTimerSettingsContainer>
      <input className="input" id="work-time" max={60} min={0} name="work-time" type="number" />
      <input className="input" id="short-rest" max={15} min={5} name="short-rest" type="number" />
      <input className="input" id="long-rest" max={60} min={5} name="long-rest" type="number" />
    </TimerSettingsStyles.StyledTimerSettingsContainer>
  );
};
