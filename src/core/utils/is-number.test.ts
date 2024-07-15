import { isNumber } from './is-number';

describe('isNumber', () => {
  it('should return true if value is a number', () => {
    expect(isNumber(1)).toBeTruthy();
  });

  it('should return false is value is not a number', () => {
    expect(isNumber([1, 2])).toBeFalsy();
    expect(isNumber('1')).toBeFalsy();
  });

  it('should return false is value is NaN', () => {
    expect(isNumber(NaN)).toBeFalsy();
  });
});
