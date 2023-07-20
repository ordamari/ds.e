import React from 'react';
import Wrapper from './Components/Wrapper';
import Spacer from './Components/Spacer';
import PageButton from './Components/PageButton';

interface PaginatorProps {
  pages: number;
  selectedPage: number;
  onPageChange?: (page: number) => void;
  className?: string;
  pageButtonClassName?: string;
}

const Paginator = ({
  className,
  selectedPage,
  onPageChange,
  pages,
  pageButtonClassName,
}: PaginatorProps) => {
  if (pages <= 1) return null;
  if (pages <= 7)
    return (
      <Wrapper className={className}>
        {Array.from(Array(pages).keys()).map((page) => (
          <PageButton
            key={page}
            onClick={onPageChange}
            className={pageButtonClassName}
            page={page}
            selectedPage={selectedPage}
          />
        ))}
      </Wrapper>
    );
  if (selectedPage > 3 && selectedPage < pages - 4)
    return (
      <Wrapper className={className}>
        <PageButton
          page={0}
          selectedPage={selectedPage}
          onClick={onPageChange}
          className={pageButtonClassName}
        />
        <Spacer />
        {Array.from(Array(5).keys()).map((index) => {
          const page = selectedPage - 2 + index;
          return (
            <PageButton
              page={page}
              selectedPage={selectedPage}
              onClick={onPageChange}
              key={page}
              className={pageButtonClassName}
            />
          );
        })}
        <Spacer />
        <PageButton
          page={pages - 1}
          selectedPage={selectedPage}
          onClick={onPageChange}
          className={pageButtonClassName}
        />
      </Wrapper>
    );
  if (selectedPage <= 3)
    return (
      <Wrapper className={className}>
        {Array.from(Array(selectedPage + 3).keys()).map((page) => (
          <PageButton
            key={page}
            onClick={onPageChange}
            className={pageButtonClassName}
            page={page}
            selectedPage={selectedPage}
          />
        ))}
        <Spacer />
        <PageButton
          page={pages - 1}
          selectedPage={selectedPage}
          onClick={onPageChange}
          className={pageButtonClassName}
        />
      </Wrapper>
    );
  if (selectedPage >= pages - 4)
    return (
      <Wrapper className={className}>
        <PageButton
          page={0}
          selectedPage={selectedPage}
          onClick={onPageChange}
          className={pageButtonClassName}
        />
        <Spacer />
        {Array.from(Array(pages - selectedPage + 2).keys()).map((index) => {
          const page = selectedPage - 2 + index;
          return (
            <PageButton
              page={page}
              selectedPage={selectedPage}
              onClick={onPageChange}
              key={page}
              className={pageButtonClassName}
            />
          );
        })}
      </Wrapper>
    );
  return null;
};

export default Paginator;
