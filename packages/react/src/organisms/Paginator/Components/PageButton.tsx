import React from 'react';
interface PageButtonProps {
  page: number;
  selectedPage: number;
  className?: string;
  onClick?: (page: number) => void;
}
const PageButton: React.FC<PageButtonProps> = ({
  page,
  selectedPage,
  className: customClassName = '',
  onClick,
}: PageButtonProps) => {
  const isSamePage = page === selectedPage;
  const className = `dse-paginator__button ${customClassName} ${
    isSamePage ? 'dse-paginator__button--selected' : ''
  }`;

  const handleClick = (page: number) => {
    if (onClick) onClick(page);
  };

  return (
    <button className={className} onClick={handleClick.bind(null, page)}>
      {page + 1}
    </button>
  );
};

export default PageButton;
