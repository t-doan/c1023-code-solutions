/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  if (queue.peek() !== undefined) {
    const temp = queue.dequeue() as T;
    queue.enqueue(temp);
  }
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() !== undefined) {
    const temp = queue.dequeue() as T;
    queue.enqueue(temp);

    return queue.dequeue();
  }
}
