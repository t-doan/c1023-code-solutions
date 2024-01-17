import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  while (stack.peek() !== undefined) {
    if (stack.peek() === undefined) {
      return count;
    } else {
      stack.pop();
      count++;
    }
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  let largest: number = 0;
  let temp: number;
  while (stack.peek() !== undefined) {
    if (stack.peek() === undefined) {
      return -Infinity;
    } else {
      temp = stack.pop() as number;
      if (temp >= largest) {
        largest = temp;
      } else {
        return temp;
      }
    }
  }
  return largest;
}
