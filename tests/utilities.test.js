import {isNotEmptyString} from '../src/utilities';

describe('is not empty string', () => {
  test('returns true when given a string', () => {
    expect(isNotEmptyString('Μάκης')).toBeTruthy();
  });

  test('returns true when given a character', () => {
    expect(isNotEmptyString('Μ')).toBeTruthy();
  });

  test('returns false when given a number', () => {
    expect(isNotEmptyString(4)).toBeFalsy();
  });

  test('returns false when given undefined', () => {
    expect(isNotEmptyString(undefined)).toBeFalsy();
  });

  test('returns false when given an empty string', () => {
    expect(isNotEmptyString('')).toBeFalsy();
  });

  test('returns false when given an empty {}', () => {
    expect(isNotEmptyString({})).toBeFalsy();
  });
});
