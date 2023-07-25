import { useMemo, useState } from 'react';
import { RelativePaginatorOptions } from '../types/relative-paginator-options.type';
import { callFnsInSequence } from '@or.ds.e/helpers';

function useRelativePaginator(
  relativePaginatorOptions: RelativePaginatorOptions | undefined,
) {
  const [page, setPage] = useState(0);

  const selectedPage = useMemo(
    () => relativePaginatorOptions?.page ?? page,
    [page, relativePaginatorOptions],
  );

  const handlePageChange = (
    relativePaginatorOptions
      ? callFnsInSequence(setPage, relativePaginatorOptions.handlePageChange)
      : () => {}
  ) as (page: number) => void;

  return [selectedPage, handlePageChange] as const;
}
export default useRelativePaginator;
