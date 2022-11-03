import { subtract } from '../subtract';

describe('Subtract', () => {
  it('should subtract 1 ', () => {
    const initialValue = 5;
    const expectedValue = 4;

    expect(subtract(initialValue)).toBe(expectedValue);
  });
});
