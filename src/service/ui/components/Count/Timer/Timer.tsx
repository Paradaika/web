import { Time } from 'domain/Time/Time';

interface Props {
  time: Time;
}
export const Timer = ({ time }: Props) => {
  return (
    <div aria-label="count" className="count">
      <p aria-label="minutes" className="minutes">
        {time.getMinutes()}
      </p>
      <p aria-label="seconds" className="seconds">
        {time.getSeconds()}
      </p>
    </div>
  );
};
