import React from 'react';
import { Variant, Spacing, Align, Justify } from '@or.ds.e/foundation';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  flex?: boolean;
  center?: boolean;
  variant?: keyof typeof Variant;
  direction?: 'row' | 'column';
  gap?: keyof typeof Spacing;
  align?: keyof typeof Align;
  justify?: keyof typeof Justify;
} & React.HTMLAttributes<HTMLDivElement>;
function Container({
  className: customClassName = '',
  children,
  flex,
  center,
  variant = 'none',
  direction,
  gap = 'none',
  align,
  justify,
}: ContainerProps) {
  const baseClass = 'dse-container';
  const variantClass = `dse-${variant}`;
  const centerClass = center ? 'dse-center' : '';
  const flexClass = flex ? 'dse-flex' : '';
  const directionClass = flex && direction ? `dse-${direction}` : '';
  const gapClass = flex && gap ? `dse-gap-${gap}` : '';
  const alignClass = flex && align ? `dse-align-${align}` : '';
  const justifyClass = flex && justify ? `dse-justify-${justify}` : '';

  const className = [
    customClassName,
    baseClass,
    variantClass,
    centerClass,
    flexClass,
    directionClass,
    gapClass,
    alignClass,
    justifyClass,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={className}>{children}</div>;
}

export default Container;
