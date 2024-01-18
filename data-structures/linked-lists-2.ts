/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1;
  while (list.next) {
    count++;
    list = list.next;
  }
  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  const node = new LinkedList(value);
  while (list.next) {
    list = list.next;
  }
  list.next = node;
}

export function getTail<T>(list: LinkedList<T>): T | null {
  while (list.next) {
    list = list.next;
  }
  return list.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  if (list.data === value) {
    return true;
  }
  while (list.next) {
    list = list.next;
    if (list.data === value) {
      return true;
    }
  }
  return false;
}
