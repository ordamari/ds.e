import React from 'react';
import Button from './Button';
import { render, fireEvent } from '@testing-library/react';

test('renders the label passed to it', () => {
  const { getByText } = render(<Button>Button</Button>);

  expect(getByText('Button')).toBeInTheDocument();
});

test('calls the onClick prop when clicked', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Button</Button>);
  fireEvent.click(getByText('Button'));
  expect(onClick).toHaveBeenCalled();
});

test('renders the icon passed to it', () => {
  const { getByTestId } = render(<Button icon="caret">Button</Button>);
  expect(getByTestId('DseIcon')).toBeInTheDocument();
});

test('Does not render the icon if no icon prop is passed', () => {
  const { queryByTestId } = render(<Button>Button</Button>);
  expect(queryByTestId('DseIcon')).not.toBeInTheDocument();
});

test('Disables the button if the disabled prop is passed', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <Button onClick={onClick} disabled>
      Button
    </Button>,
  );
  const button = getByText('Button');
  fireEvent.click(button);
  expect(onClick).not.toHaveBeenCalled();
});

test('Snapshot primary', () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Snapshot with icon', () => {
  const { container } = render(<Button icon="caret">Button</Button>);
  expect(container).toMatchSnapshot();
});
