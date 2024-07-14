export const getRandomValue = <T>(arrayOfValues: T[]): T => {
  const min = 0;
  const max = arrayOfValues.length - 1;

  const index = Math.floor(Math.random() * (max - min + 1) + min);

  return arrayOfValues[index];
};
