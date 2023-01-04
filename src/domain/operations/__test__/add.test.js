import { add } from '../add';

describe('add', () => {
  it('should add 1 ', () => {
    const initialValue = 4;
    const expectedValue = 5;

    expect(add(initialValue)).toBe(expectedValue);
  });
});
