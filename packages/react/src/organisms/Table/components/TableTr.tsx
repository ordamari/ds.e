import { Item } from '../types/item.type';
import { KeyMap } from '../types/key-map.type';
import { RenderMap } from '../types/render-map.type';
import React from 'react';

type TableTrProps<T extends Item> = {
  dataItem: T;
  keyMap: KeyMap<T>;
  renderMap: RenderMap<T>;
};

function TableTr<T extends Item>({
  dataItem,
  keyMap,
  renderMap,
}: TableTrProps<T>) {
  return (
    <tr>
      {Object.keys(keyMap).map((key) => {
        const k = key as keyof T;
        const renderFn = renderMap[k];
        const value = renderFn ? renderFn(dataItem[k]) : dataItem[k];
        return <td key={key}>{value}</td>;
      })}
    </tr>
  );
}
export default TableTr;
