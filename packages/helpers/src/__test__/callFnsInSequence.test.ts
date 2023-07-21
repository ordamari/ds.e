import callFnsInSequence from '../callFnsInSequence';
it('call fns in sequence', () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();

  const fn = callFnsInSequence(fn1, fn2);
  fn();
  expect(fn1).toBeCalled();
  expect(fn2).toBeCalled();
});

it('call fns in sequence with args', () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();

  const fn = callFnsInSequence(fn1, fn2);
  fn(1, 2, 3);
  expect(fn1).toBeCalledWith(1, 2, 3);
  expect(fn2).toBeCalledWith(1, 2, 3);
});
