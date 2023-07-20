import React, { useRef } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { Icon as IconOptions } from '@or.ds.e/foundation';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  icon?: keyof typeof IconOptions;
  containerRef?: React.RefObject<HTMLDivElement>;
}

const Input = ({
  containerClassName: customContainerClassName,
  containerRef: customContainerRef,
  icon,
  ...props
}: InputProps) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const containerClassName = `${customContainerClassName} dse-input-container`;

  const onContainerClick = () => {
    const container = customContainerRef || containerRef;
    const target = container.current as HTMLDivElement | null;
    if (!target) return;
    [...target.children].forEach((child: HTMLElement) => {
      if (child.tagName === 'INPUT') {
        child.focus();
      }
    });
  };

  return (
    <div
      ref={customContainerRef || containerRef}
      onClick={onContainerClick}
      className={containerClassName}
    >
      {icon && <Icon icon={icon} />}
      <input data-testid="DseInput" {...props} />
    </div>
  );
};

export default Input;
