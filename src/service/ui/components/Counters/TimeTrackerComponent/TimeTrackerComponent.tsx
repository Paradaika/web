import { useTimeTracker } from './useTimeTracker';

import { TimeTrackerStyles } from './TimeTrackerComponent.styles';
import { ButtonStyles } from '../../Button/Button.styles';

import { TimeTrackerId } from '../Counters';

interface Props {
  counterName: string;
  id: TimeTrackerId;
  onDelete: (timeTrackerId: TimeTrackerId) => void;
}
export const TimeTrackerComponent = ({ counterName, onDelete, id }: Props) => {
  const { hours, isPaused, minutes, pauseHandler, playHandler, seconds } = useTimeTracker();
  const deleteHandler = () => {
    onDelete(id);
  };
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
        <ButtonStyles.StyledButtonError onClick={deleteHandler}>Delete</ButtonStyles.StyledButtonError>
      </TimeTrackerStyles.TimeTrackerContainer>
    </TimeTrackerStyles.TimeTrackerLabelContainer>
  );
};
