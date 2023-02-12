import { useState } from 'react';

import Count from 'service/ui/components/Count';
import TodoListComponent from 'service/ui/components/TodoListComponent';

import Counters from '../../components/Counters';
import Modal from '../../components/Modal/Modal';
import TimerSettings from '../../components/TimerSettings';

import { BodyStyles } from './Body.styles';

export const Body = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const openSettingsModalHandler = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModalHandler = () => {
    setIsSettingsModalOpen(false);
  };
  return (
    <BodyStyles.StyledBody>
      <Counters />
      <BodyStyles.StyledCountContainer>
        {isSettingsModalOpen ? (
          <Modal onBackDropsClick={() => {}}>
            <TimerSettings onCloseModal={closeSettingsModalHandler} />
          </Modal>
        ) : null}
        <Count onCountTimeClick={openSettingsModalHandler} />
      </BodyStyles.StyledCountContainer>
      <TodoListComponent />
    </BodyStyles.StyledBody>
  );
};
