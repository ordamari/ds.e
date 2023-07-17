import { FontSize } from '@or.ds.e/foundation';
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({
  children,
  size = FontSize.base as keyof typeof FontSize,
}: TextProps) => {
  const className = `dse-text dse-text-${size}`;
  return <p className={className}>{children}</p>;
};

export default Text;
