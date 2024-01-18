/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  return stack.peek();
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  if (stack.peek() !== undefined) {
    return stack.pop();
  }
  return undefined;
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  if (stack.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}
