import React from 'react';
import Input from './Input';
import { render, fireEvent } from '@testing-library/react';

test('renders input', () => {
  const { getByTestId } = render(<Input />);
  expect(getByTestId('DseInput')).toBeInTheDocument();
});

test('renders input with icon', () => {
  const { getByTestId } = render(<Input icon="caret" />);
  expect(getByTestId('DseIcon')).toBeInTheDocument();
});

test('snapshot input', () => {
  const { container } = render(<Input />);
  expect(container).toMatchSnapshot();
});

test('snapshot input with icon', () => {
  const { container } = render(<Input icon="caret" />);
  expect(container).toMatchSnapshot();
});
