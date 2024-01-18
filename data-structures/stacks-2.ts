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
  let largest = -Infinity;
  let temp = stack.peek();
  if (temp === undefined) {
    return -Infinity;
  }
  while (temp !== undefined) {
    if (temp > largest) {
      largest = temp;
    }
    stack.pop();
    temp = stack.peek();
  }
  return largest;
}
