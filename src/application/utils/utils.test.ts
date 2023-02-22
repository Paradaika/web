import { ISettings } from '@/domain/interfaces/ISettings';
import { getInitialTime } from './getInitialTime';

describe('Get initial time', () => {
  it('should return work time on first round', () => {
    const fakeSettings: ISettings = {
      longRest: 1,
      shortRest: 2,
      workTime: 3
    };
    const fakeCount = 0;

    const initialTime = getInitialTime({ settings: fakeSettings, timerCount: fakeCount });

    expect(initialTime).toBe(fakeSettings.workTime);
  });

  it('should return short rest on second round', () => {
    const fakeSettings: ISettings = {
      longRest: 1,
      shortRest: 2,
      workTime: 3
    };
    const fakeCount = 1;

    const initialTime = getInitialTime({ settings: fakeSettings, timerCount: fakeCount });

    expect(initialTime).toBe(fakeSettings.shortRest);
  });
});
