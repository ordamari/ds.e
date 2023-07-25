import { Item } from './types/item.type';
import { SortMap } from './types/sort-map.type';
import { KeyMap } from './types/key-map.type';
import { RenderMap } from './types/render-map.type';
import { useMemo, useState } from 'react';
import { SelectedSort } from './types/selected-sort.type';
import { SortDirection } from './enums/sort-direction.enum';
import { StaticPaginatorOptions } from './types/static-paginator-options.type';
import { RelativePaginatorOptions } from './types/relative-paginator-options.type';
import useRelativePaginator from './hooks/useRelativePaginator';
import useStaticPaginator from './hooks/useStaticPaginator';
import React from 'react';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import Paginator from '../Paginator/Paginator';

type TableProps<T extends Item> = {
  data: T[];
  keyMap?: KeyMap<T>;
  sortMap?: SortMap<T>;
  renderMap?: RenderMap<T>;
  containerClassName?: string;
  className?: string;
  staticPaginatorOptions?: StaticPaginatorOptions;
  relativePaginatorOptions?: RelativePaginatorOptions;
};

function Table<T extends Item>({
  data,
  keyMap,
  sortMap,
  renderMap,
  className: customClassName = '',
  containerClassName: customContainerClassName = '',
  staticPaginatorOptions,
  relativePaginatorOptions,
}: TableProps<T>) {
  const renderedKeyMap = useMemo(() => {
    if (keyMap) return keyMap;
    return Object.keys(data[0] ?? {}).reduce((acc, key) => {
      const k = key as keyof T;
      acc[k] = key;
      return acc;
    }, {} as KeyMap<T>);
  }, [keyMap, data]);

  const [selectedSort, setSelectedSort] = useState<SelectedSort<T> | null>(
    null,
  );

  const sortedData = useMemo(() => {
    if (!selectedSort || !sortMap) return data;
    const { key, direction } = selectedSort;
    const sortFn = sortMap[key];
    if (!sortFn) return data;
    return [...data].sort(
      (a, b) =>
        sortFn(a[key], b[key]) *
        (direction === SortDirection.Ascending ? 1 : -1),
    );
  }, [data, selectedSort, sortMap]);

  const [relativePage, handleRelativePageChange] = useRelativePaginator(
    relativePaginatorOptions,
  );

  const [staticPage, handleStaticPageChange, staticPages, staticPageData] =
    useStaticPaginator(staticPaginatorOptions, sortedData);

  const pageData = useMemo(
    () => (staticPaginatorOptions ? staticPageData : sortedData),
    [staticPaginatorOptions, sortedData, staticPageData],
  );

  const containerClassName = `dse-table__container ${customContainerClassName}`;
  const className = `dse-table ${customClassName}`;

  return (
    <div className={containerClassName}>
      <table className={className}>
        <TableHeader
          keyMap={renderedKeyMap}
          selectedSort={selectedSort}
          sortMap={sortMap}
          setSelectedSort={setSelectedSort}
        />
        <TableBody
          data={pageData}
          keyMap={renderedKeyMap}
          renderMap={renderMap ?? ({} as RenderMap<T>)}
        />
      </table>
      {staticPaginatorOptions && (
        <Paginator
          className={`dse-table__paginator ${staticPaginatorOptions.className}`}
          pages={staticPages}
          pageButtonClassName={staticPaginatorOptions.pageButtonClassName}
          selectedPage={staticPage}
          onPageChange={handleStaticPageChange}
        />
      )}

      {relativePaginatorOptions && (
        <Paginator
          pages={relativePaginatorOptions.pages}
          className={`dse-table__paginator ${relativePaginatorOptions.className}`}
          pageButtonClassName={relativePaginatorOptions.pageButtonClassName}
          selectedPage={relativePage}
          onPageChange={handleRelativePageChange}
        />
      )}
    </div>
  );
}

export default Table;
