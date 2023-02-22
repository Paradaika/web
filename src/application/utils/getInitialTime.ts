import { ISettings } from 'domain/interfaces/ISettings';

interface IProps {
  timerCount: number;
  settings: ISettings;
}
export const getInitialTime = ({ timerCount, settings }: IProps) => {
  if (timerCount % 4 === 0) return settings.longRest;
  if (timerCount % 2 === 0) return settings.workTime;
  return settings.shortRest;
};
