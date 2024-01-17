/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  return queue.peek();
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  return queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() !== undefined) {
    return queue.dequeue();
  }
  return undefined;
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  if (queue.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}
