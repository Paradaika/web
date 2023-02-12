import { Time } from 'domain/Time/Time';

import { Styles } from './Timer.styles';
interface Props {
  time: Time;
  onClick: () => void;
}
export const Timer = ({ time, onClick }: Props) => {
  const clickHandler = () => {
    onClick();
  };
  return (
    <Styles.StyledTimer aria-label="count" onClick={clickHandler} style={{ display: 'flex' }}>
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
