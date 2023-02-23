import { ISettings } from 'domain/interfaces/ISettings';

interface IProps {
  timerCount: number;
  settings: ISettings;
}
export const getInitialTime = ({ timerCount, settings }: IProps) => {
  if (timerCount === 0) return settings.workTime;
  if ((timerCount + 1) % 8 === 0) return settings.longRest;
  if (timerCount % 2 === 0) return settings.workTime;
  return settings.shortRest;
};
