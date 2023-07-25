import { Item } from './item.type';

export type KeyMap<T extends Item> = {
  [K in keyof Partial<T>]: string;
};
