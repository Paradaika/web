import { Time } from 'domain/Time/Time';

import { Styles } from './Timer.styles';
interface Props {
  time: Time;
}
export const Timer = ({ time }: Props) => {
  return (
    <Styles.StyledTimer aria-label="count">
      <div className="progress-bar">
        <p aria-label="minutes" className="minutes">
          {time.getMinutes()}
        </p>
        <p>:</p>
        <p aria-label="seconds" className="seconds">
          {time.getSeconds()}
        </p>
      </div>
    </Styles.StyledTimer>
  );
};
