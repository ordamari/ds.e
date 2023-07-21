import { renderHook, act } from '@testing-library/react';
import useArray from './useArray';

type User = {
  name: string;
  id: number;
  birthday: Date;
};

const users: User[] = [
  {
    name: 'John',
    id: 1,
    birthday: new Date('1990-01-01'),
  },
  {
    name: 'Jane',
    id: 2,
    birthday: new Date('1990-02-01'),
  },
  {
    name: 'Jack',
    id: 3,
    birthday: new Date('1990-03-01'),
  },
];

test('should return empty array as default value', () => {
  const { result } = renderHook(useArray);
  expect(result.current[0]).toEqual([]);
});

test('should return initial value', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
});

test('should set value', () => {
  const { result } = renderHook(useArray<User>);
  expect(result.current[0]).toEqual([]);
  act(() => {
    result.current[1].set(users);
  });
  expect(result.current[0]).toEqual(users);
});

test('should push item', () => {
  const { result } = renderHook(useArray<User>);
  expect(result.current[0]).toEqual([]);
  act(() => {
    result.current[1].add(users[0]);
  });
  expect(result.current[0]).toEqual([users[0]]);
});

test('should push items', () => {
  const { result } = renderHook(useArray<User>);
  expect(result.current[0]).toEqual([]);
  act(() => {
    result.current[1].addArray([users[0], users[1]]);
  });
  expect(result.current[0]).toEqual([users[0], users[1]]);
});

test('should remove item', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  act(() => {
    result.current[1].removeById(users[0].id);
  });
  expect(result.current[0]).toEqual([users[1], users[2]]);
});

test('should clear the array', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  act(() => {
    result.current[1].clear();
  });
  expect(result.current[0]).toEqual([]);
});

test('should update item', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  act(() => {
    result.current[1].updateById(users[0].id, { name: 'Jack' });
  });
  expect(result.current[0]).toEqual([
    { ...users[0], name: 'Jack' },
    users[1],
    users[2],
  ]);
});

test('should replace by id', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  act(() => {
    result.current[1].replaceById(users[0].id, { ...users[0], name: 'Jack' });
  });
  expect(result.current[0]).toEqual([
    { ...users[0], name: 'Jack' },
    users[1],
    users[2],
  ]);
});

test('should return by id', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  expect(result.current[1].getById(users[0].id)).toEqual(users[0]);
});

test('should sort by date', () => {
  const { result } = renderHook(useArray<User>, { initialProps: users });
  expect(result.current[0]).toEqual(users);
  expect(result.current[1].getSortedByDates('birthday')).toEqual([
    users[2],
    users[1],
    users[0],
  ]);
});
