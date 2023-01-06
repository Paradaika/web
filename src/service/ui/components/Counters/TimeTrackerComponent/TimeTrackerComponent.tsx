import { useTimeTracker } from './useTimeTracker';

import { TimeTrackerStyles } from './TimeTrackerComponent.styles';
import { ButtonStyles } from '../../Button/Button.styles';

interface Props {
  counterName: string;
}
export const TimeTrackerComponent = ({ counterName }: Props) => {
  const { hours, isPaused, minutes, pauseHandler, playHandler, seconds } = useTimeTracker();
  return (
    <TimeTrackerStyles.TimeTrackerLabelContainer>
      <p>{counterName}</p>
      <TimeTrackerStyles.TimeTrackerContainer>
        <p>
          {' '}
          {hours} : {minutes} : {seconds}
        </p>
        <p>
          {isPaused ? (
            <ButtonStyles.StyledButtonSuccess onClick={playHandler}>Play</ButtonStyles.StyledButtonSuccess>
          ) : (
            <ButtonStyles.StyledButton onClick={pauseHandler}>Pause</ButtonStyles.StyledButton>
          )}
        </p>
      </TimeTrackerStyles.TimeTrackerContainer>
    </TimeTrackerStyles.TimeTrackerLabelContainer>
  );
};
