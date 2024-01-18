/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getHead<T>(list: LinkedList<T>): T | null {
  return list.data;
}

export function updateHead<T>(list: LinkedList<T>, value: T | null): void {
  list.data = value;
}

export function withoutHead<T>(list: LinkedList<T>): LinkedList<T> | null {
  return list.next;
}

export function prepend<T>(list: LinkedList<T>, value: T): LinkedList<T> {
  const newList = new LinkedList(value);
  newList.next = list;
  return newList;
}
