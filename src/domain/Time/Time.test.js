import { Time } from './Time';

describe('Time', () => {
  it('should convert 61s in 1 min and 1s', () => {
    const time = new Time(61);

    expect(time.getMinutes()).toBe('1');
    expect(time.getSeconds()).toBe('1');
  });
});
