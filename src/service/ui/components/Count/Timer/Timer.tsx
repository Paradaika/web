import { Time } from 'domain/Time/Time';

import { Styles } from './Timer.styles';
interface Props {
  time: Time;
}
export const Timer = ({ time }: Props) => {
  return (
    <Styles.StyledTimer aria-label="count">
      <p aria-label="minutes" className="minutes">
        {time.getMinutes()}
      </p>
      <p>:</p>
      <p aria-label="seconds" className="seconds">
        {time.getSeconds()}
      </p>
    </Styles.StyledTimer>
  );
};
