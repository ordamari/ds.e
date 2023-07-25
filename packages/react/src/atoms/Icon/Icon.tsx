import React from 'react';
import { Spacing, Icon as IconOptions } from '@or.ds.e/foundation';

interface IconProps {
  icon: keyof typeof IconOptions;
  size?: keyof typeof Spacing;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = Spacing.sm,
  className: customClassName = '',
}) => {
  const className = `${customClassName} dse-width-${size} dse-height-${size}`;
  switch (icon) {
    case 'caret':
    case 'descending':
      return (
        <svg
          fill="none"
          className={className}
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          data-testid="DseIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      );
    case 'ascending':
      return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          />
        </svg>
      );

    case 'check':
      return (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          data-testid="DseIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
