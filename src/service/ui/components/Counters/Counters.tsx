import { ThemeProvider } from 'styled-components';

import { themes } from 'domain/styles/themes';

import { CountersComponentStyles } from './Counters.styles';
import { FormEvent, useRef, useState } from 'react';
import TimeTrackerComponent from './TimeTrackerComponent';

export type TimeTrackerId = string;
interface ITimeTracker {
  name: string;
  id: TimeTrackerId;
}

export const Counters = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [timeTrackers, setTimeTrackers] = useState<ITimeTracker[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addTimeTracker = (timeTracker: ITimeTracker) => {
    setTimeTrackers(prevTimeTrackers => [...prevTimeTrackers, timeTracker]);
  };

  const deleteTimeTracker = (timeTrackerId: TimeTrackerId) => {
    setTimeTrackers(prevTimeTrackers => {
      return prevTimeTrackers.filter(timeTracker => timeTracker.id !== timeTrackerId);
    });
  };

  const todoListContainerDisplayHandler = () => {
    setIsCollapsed(prev => !prev);
  };

  const onTimeTrackerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTimeTracker: ITimeTracker = {
      id: crypto.randomUUID(),
      name: inputRef.current?.value || ''
    };
    addTimeTracker(newTimeTracker);
    formRef.current?.reset();
  };
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <CountersComponentStyles.CountersComponentContainer className={`${isCollapsed && 'collapsed'}`}>
        <CountersComponentStyles.CountersHeader className={`${isCollapsed && 'collapsed'}`} onClick={todoListContainerDisplayHandler}>
          Counters
        </CountersComponentStyles.CountersHeader>
        <CountersComponentStyles.CountersForm onSubmit={onTimeTrackerSubmit} ref={formRef}>
          <input className="timeTrackerInput" ref={inputRef} />
        </CountersComponentStyles.CountersForm>
        <CountersComponentStyles.CountersContainer>
          {timeTrackers.map(timeTracker => (
            <TimeTrackerComponent counterName={timeTracker.name} id={timeTracker.id} key={timeTracker.id} onDelete={deleteTimeTracker} />
          ))}
        </CountersComponentStyles.CountersContainer>
      </CountersComponentStyles.CountersComponentContainer>
    </ThemeProvider>
  );
};
