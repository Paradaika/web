import { useState } from 'react';

import { BsPlay, BsArrowCounterclockwise, BsPause } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';

import { ButtonStyles } from 'service/ui/components/Button/Button.styles';
import { Timer } from 'service/ui/components/Count/Timer/Timer';
import Modal from 'service/ui/components/Modal/Modal';
import TimerSettings from 'service/ui/components/TimerSettings';

import { useCount } from './useCount';

import { themes } from 'domain/styles/themes';
import { Time } from 'domain/Time/Time';

import { Styles as CountStyles } from './Count.styles';

export const Count = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const openSettingsModalHandler = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModalHandler = () => {
    setIsSettingsModalOpen(false);
  };

  const { pauseHandler, playHandler, resetHandler, isPaused, count } = useCount();

  const time = new Time(count / 100);

  const theme = themes.defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CountStyles.StyledBall>
        <Timer onClick={openSettingsModalHandler} time={time} />
        <CountStyles.StyledButtonContainer>
          {isPaused ? (
            <ButtonStyles.StyledButtonSuccess className="icon-container" data-testid="play-button" name="play" onClick={playHandler}>
              <BsPlay style={{ height: '100%', width: '100%' }} />
            </ButtonStyles.StyledButtonSuccess>
          ) : (
            <ButtonStyles.StyledButton className="icon-container" data-testid="pause-button" name="pause" onClick={pauseHandler}>
              <BsPause style={{ height: '100%', width: '100%' }} />
            </ButtonStyles.StyledButton>
          )}
          <ButtonStyles.StyledButtonError
            className="icon-container"
            data-testid="reset-button"
            disabled={!isPaused}
            name="reset"
            onClick={resetHandler}
          >
            <BsArrowCounterclockwise style={{ height: '100%', width: '100%' }} />
          </ButtonStyles.StyledButtonError>
        </CountStyles.StyledButtonContainer>
      </CountStyles.StyledBall>
      {isSettingsModalOpen ? (
        <Modal onBackDropsClick={() => {}}>
          <TimerSettings onCloseModal={closeSettingsModalHandler} />
        </Modal>
      ) : null}
    </ThemeProvider>
  );
};
