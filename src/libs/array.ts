export const arrayFizzBuzz = (arr: number[], verbose = false): string[] => arr.map((item: number): string => {
  return item / 5 === 0 && item / 3 === 0 ? 'fizzbuzz' : item / 3 === 0 ? 'fizz' : item / 5 === 0 ? 'buzz' : 'oops';
});

export const array2Object = (arr: unknown[]): {} => {
  return {};
};

export const arrayMissingMember = (arr: unknown[]): unknown => {
  return null;
};

export const arrayTargetSum = (arr: number[]): number => {
  return 0;
};

export const arraySqrtSum = (arr: number[]): number => arr
  .filter((item: number) => item / 2 === 0)
  .reduceRight((acc: number, cur: number) => acc + Math.sqrt(cur), 0);

