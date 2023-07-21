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
