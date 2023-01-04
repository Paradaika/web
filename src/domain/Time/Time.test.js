import { Time } from './Time';

import { INITIAL_VALUE_25 } from 'domain/initialValues/initialValues';

describe('Time', () => {
  it('should convert 61s in 1 min and 1s', () => {
    const time = new Time(61);

    expect(time.getMinutes()).toBe('1');
    expect(time.getSeconds()).toBe('1');
  });

  it('initial value 25 should render 25 min and 0 s', () => {
    const time = new Time(INITIAL_VALUE_25 / 100);

    expect(time.getMinutes()).toBe('25');
    expect(time.getSeconds()).toBe('0');
  });

  it('should convert 3600 s in one hour', () => {
    const time = new Time(3600);

    expect(time.getHours()).toBe('1');
    expect(time.getMinutes()).toBe('0');
    expect(time.getSeconds()).toBe('0');
  });
});
