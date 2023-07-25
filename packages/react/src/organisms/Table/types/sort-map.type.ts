import { Item } from './item.type';

export type SortMap<T extends Item> = {
  [K in keyof Partial<T>]: (first: T[K], second: T[K]) => number;
};
