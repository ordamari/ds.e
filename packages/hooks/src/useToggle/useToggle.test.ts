import { renderHook, act } from '@testing-library/react';
import useToggle from './useToggle';

test('should return false as default value', () => {
  const { result } = renderHook(useToggle);
  expect(result.current[0]).toBe(false);
});

test('should return true as default value', () => {
  const { result } = renderHook(useToggle, { initialProps: true });
  expect(result.current[0]).toBe(true);
});

test('should toggle value if the value is not boolean', () => {
  const { result } = renderHook(useToggle);
  expect(result.current[0]).toBe(false);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(false);
});

test('should set value', () => {
  const { result } = renderHook(useToggle);
  expect(result.current[0]).toBe(false);
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toBe(false);
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);
});
