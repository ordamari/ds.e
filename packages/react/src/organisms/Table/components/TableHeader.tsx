import Icon from '../../../atoms/Icon/Icon';
import { SortDirection } from '../enums/sort-direction.enum';
import { Item } from '../types/item.type';
import { KeyMap } from '../types/key-map.type';
import { SelectedSort } from '../types/selected-sort.type';
import { SortMap } from '../types/sort-map.type';
import React from 'react';

type TableHeaderProps<T extends Item> = {
  keyMap: KeyMap<T>;
  sortMap?: SortMap<T>;
  selectedSort: SelectedSort<T> | null;
  setSelectedSort: React.Dispatch<React.SetStateAction<SelectedSort<T> | null>>;
};
function TableHeader<T extends Item>({
  keyMap,
  sortMap = {} as SortMap<T>,
  selectedSort,
  setSelectedSort,
}: TableHeaderProps<T>) {
  const onChooseSort = (key: keyof T, direction: SortDirection) => {
    setSelectedSort((prev) => {
      if (prev?.key === key && prev.direction === direction) return null;
      return {
        key,
        direction,
      };
    });
  };

  return (
    <thead>
      <tr>
        {Object.entries(keyMap).map(([key, value]) => {
          const isSelectedSort = selectedSort && selectedSort.key === key;
          const isAscending =
            isSelectedSort &&
            selectedSort.direction === SortDirection.Ascending;
          const isDescending =
            isSelectedSort &&
            selectedSort.direction === SortDirection.Descending;

          return (
            <th key={key}>
              <div className="dse-table__th-inner">
                {value}
                {sortMap[key as keyof T] && (
                  <div className="dse-table__sort-container">
                    <button
                      className={
                        isAscending ? 'dse-table__sort-container--selected' : ''
                      }
                      onClick={() =>
                        onChooseSort(key as keyof T, SortDirection.Ascending)
                      }
                    >
                      <Icon size="xxs" icon="ascending" />
                    </button>
                    <button
                      className={
                        isDescending
                          ? 'dse-table__sort-container--selected'
                          : ''
                      }
                      onClick={() =>
                        onChooseSort(key as keyof T, SortDirection.Descending)
                      }
                    >
                      <Icon size="xxs" icon="descending" />
                    </button>
                  </div>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
export default TableHeader;
