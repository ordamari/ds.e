import { Item } from '../types/item.type';
import { KeyMap } from '../types/key-map.type';
import { RenderMap } from '../types/render-map.type';
import TableTr from './TableTr';
import React from 'react';

type TableBodyProps<T extends Item> = {
  data: T[];
  keyMap: KeyMap<T>;
  renderMap: RenderMap<T>;
};

function TableBody<T extends Item>({
  data,
  keyMap,
  renderMap,
}: TableBodyProps<T>) {
  return (
    <tbody>
      {data.map((item) => (
        <TableTr
          key={item.id}
          dataItem={item}
          keyMap={keyMap}
          renderMap={renderMap}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
