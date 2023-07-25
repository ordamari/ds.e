import { Item } from './item.type';

export type RenderMap<T extends Item> = {
  [K in keyof Partial<T>]: (item: T[K]) => React.ReactNode;
};
