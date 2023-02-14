import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { ButtonStyles } from '../Button/Button.styles';
import { TimerSettingsStyles } from './TimerSettings.styles';
import { useTimerSettings } from './useTimerSettings';

interface IProps {
  onCloseModal: () => void;
}

export const TimerSettings = ({ onCloseModal }: IProps) => {
  const { longRest, longRestChangeHandler, shortRest, shortRestChangeHandler, submitHandler, workTime, workTimeChangeHandler, saveHandler } =
    useTimerSettings(onCloseModal);

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
