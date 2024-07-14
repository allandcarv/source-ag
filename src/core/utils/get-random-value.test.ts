import { getRandomValue } from './get-random-value';

const mockedRandom = jest.fn(() => 1);
Math.floor = mockedRandom;

describe('getRandomValue', () => {
  it('should return a random value', () => {
    const values: Record<string, number>[] = [{ a: 1 }, { b: 2 }];
    const expected = { b: 2 };

    const result = getRandomValue(values);

    expect(result).toStrictEqual(expected);
  });
});
