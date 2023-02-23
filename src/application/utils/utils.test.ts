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

  it('should return long rest on seventh round', () => {
    // w s w s w s w l w s w s w s w l
    // 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
    const fakeSettings: ISettings = {
      longRest: 1,
      shortRest: 2,
      workTime: 3
    };
    const fakeCount = 7;

    const initialTime = getInitialTime({ settings: fakeSettings, timerCount: fakeCount });

    expect(initialTime).toBe(fakeSettings.longRest);
  });
});
