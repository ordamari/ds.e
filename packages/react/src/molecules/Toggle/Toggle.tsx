import React from 'react';
import '@or.ds.e/scss/lib/Toggle.css';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox' | 'switch';
  labelClassName?: string;
}

function Toggle({
  type = 'checkbox',
  className: customClassName,
  labelClassName: customLabelClassName,
  ...props
}: ToggleProps) {
  const className = `toggle-dse ${type} ${customClassName}`;
  const labelClassName = `toggle-dse-label ${customLabelClassName}`;
  return (
    <label className={labelClassName}>
      <input className={className} {...props} type="checkbox" />
    </label>
  );
}

export default Toggle;
