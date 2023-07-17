import React from 'react';
import { Spacing } from '@or.ds.e/foundation';

interface MarginProps {
  children: React.ReactNode;
  space?: keyof typeof Spacing;
  start?: boolean;
  end?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  children,
  space = Spacing.xxxs as keyof typeof Spacing,
  start = false,
  end = false,
  top = false,
  bottom = false,
}: MarginProps) => {
  let className = '';
  if (!start && !end && !top && !bottom) className = `dse-margin-${space}`;
  else {
    if (start) className += ` dse-margin-inline-start-${space}`;
    if (end) className += ` dse-margin-inline-end-${space}`;
    if (top) className += ` dse-margin-block-start-${space}`;
    if (bottom) className += ` dse-margin-block-end-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
