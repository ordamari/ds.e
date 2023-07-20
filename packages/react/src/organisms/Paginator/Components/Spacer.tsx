import React from 'react';
import Text from '../../../atoms/Text';

interface SpacerProps {
  className?: string;
}

const Spacer: React.FC<SpacerProps> = ({
  className: customClassName = '',
}: SpacerProps) => {
  const className = `dse-paginator__spacer ${customClassName}`;
  return <Text className={className}>&#183;&#183;&#183;</Text>;
};

export default Spacer;
