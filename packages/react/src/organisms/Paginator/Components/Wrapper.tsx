import React from 'react';
interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className: customClassName = '',
}: WrapperProps) => {
  const className = `dse-paginator ${customClassName}`;
  return <div className={className}>{children}</div>;
};

export default Wrapper;
