export const getSum = (numbers: number[]): number => {
  let sum: number = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
}

export const getMultiple = (numbers: number[]): number => {
  let sum: number = 1;
    for (const number of numbers) {
      sum *= number;
    }
    return sum;
}