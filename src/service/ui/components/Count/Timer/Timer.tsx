import { Time } from 'domain/Time/Time';

import { Styles } from './Timer.styles';
interface Props {
  time: Time;
}
export const Timer = ({ time }: Props) => {
  return (
    <Styles.StyledTimer aria-label="count" style={{ display: 'flex' }}>
      <Styles.StyledCountNumbers aria-label="minutes" className="minutes">
        {time.getMinutes()}
      </Styles.StyledCountNumbers>
      <Styles.StyledCountNumbers>:</Styles.StyledCountNumbers>
      <Styles.StyledCountNumbers aria-label="seconds" className="seconds">
        {time.getSeconds()}
      </Styles.StyledCountNumbers>
    </Styles.StyledTimer>
  );
};
