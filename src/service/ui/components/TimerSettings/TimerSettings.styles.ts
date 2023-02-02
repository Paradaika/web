import styled from 'styled-components';

const StyledTimerSettingsContainer = styled('form')`
  align-items: center;
  background: #e0e0e0;
  background: #e0e0e0;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  border-radius: 50px;
  box-shadow: 22px 22px 44px #b1b1b1, -22px -22px 44px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 500px;
  gap: 1.4rem;
  .input {
    position: relative;
  }
`;

const StyledInputContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 3rem;
  align-items: center;

  .input {
    text-align: end;
    width: 50px;
  }
  .label {
    flex: 0.3;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }
`;

export const TimerSettingsStyles = { StyledTimerSettingsContainer, StyledInputContainer };
