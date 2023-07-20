import React from 'react';
import { Variant, FontSize, Icon as IconOptions } from '@or.ds.e/foundation';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof Variant;
  size?: keyof typeof FontSize;
  icon?: keyof typeof IconOptions;
}

const Button = ({
  children,
  className: customClassName = '',
  size = FontSize.base,
  variant = Variant.primary,
  icon,
  ...props
}: ButtonProps) => {
  const className = `${customClassName} dse-button dse-button--${variant}`;
  return (
    <button className={className} {...props}>
      {icon ? <Icon className="dse-button__icon" icon={icon} /> : null}
      <Text size={size}>{children}</Text>
    </button>
  );
};

export default Button;
