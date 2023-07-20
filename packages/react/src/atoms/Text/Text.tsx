import React from 'react';
import { FontSize } from '@or.ds.e/foundation';

interface TextProps {
  children: React.ReactNode;
  size?: keyof typeof FontSize;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = FontSize.base as keyof typeof FontSize,
  className: customClassName = '',
}: TextProps) => {
  const className = `dse-text dse-text-${size} ${customClassName}`;
  return <p className={className}>{children}</p>;
};

export default Text;
