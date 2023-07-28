import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Calendar from './Calendar';

describe('Common', () => {
  test('Render the given date month', () => {
    const { getByText } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    expect(getByText('February 2021')).toBeInTheDocument();
  });

  test('Render the all the day in the month', () => {
    const { getAllByTestId } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    // month days 28 but one of them is selected
    expect(getAllByTestId('dse-month-day')).toHaveLength(27);
  });

  test('Render the prev and next month days if in there week is in the current month', () => {
    const { getAllByTestId } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    expect(getAllByTestId('dse-month-day--not-this-month')).toHaveLength(7);
  });

  test('Next month button should change the month', () => {
    const { getByTestId, getByText } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    act(() => {
      getByTestId('next-month').click();
    });
    expect(getByText('March 2021')).toBeInTheDocument();
  });

  test('Prev month button should change the month', () => {
    const { getByTestId, getByText } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    act(() => {
      getByTestId('prev-month').click();
    });
    expect(getByText('January 2021')).toBeInTheDocument();
  });

  test('Next year button should change the year', () => {
    const { getByTestId, getByText } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    act(() => {
      getByTestId('next-year').click();
    });
    expect(getByText('February 2022')).toBeInTheDocument();
  });

  test('Prev year button should change the year', () => {
    const { getByTestId, getByText } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={() => {}}
      />,
    );
    act(() => {
      getByTestId('prev-year').click();
    });
    expect(getByText('February 2020')).toBeInTheDocument();
  });

  test('Click on Date should set the date', () => {
    const setDate = jest.fn();
    const { getAllByTestId } = render(
      <Calendar
        date={new Date('2021-02-01T10:00:00.000Z')}
        setDate={setDate}
      />,
    );
    act(() => {
      getAllByTestId('dse-month-day')[0].click();
    });

    const call = setDate.mock.calls[0][0];
    expect(call.getFullYear()).toBe(2021);
    expect(call.getMonth()).toBe(1);
  });

  const Test = () => {
    const [date, setDate] = React.useState(
      new Date('2021-02-01T10:00:00.000Z'),
    );
    return <Calendar date={date} setDate={setDate} />;
  };

  test('Click on Prev month day should set the date and change the viewed month', () => {
    const { getAllByTestId, getByText, getByTestId } = render(<Test />);
    const clickedButton = getAllByTestId('dse-month-day--not-this-month')[0];
    act(() => {
      clickedButton.click();
    });
    expect(getByText('January 2021')).toBeInTheDocument();
    expect(getByTestId('dse-month-day--selected')).toHaveTextContent(
      clickedButton.textContent ?? '',
    );
  });

  test('Click on Next month day should set the date and change the viewed month', () => {
    const { getAllByTestId, getByText, getByTestId } = render(<Test />);
    const clickedButton = getAllByTestId('dse-month-day--not-this-month')[6];
    act(() => {
      clickedButton.click();
    });
    expect(getByText('March 2021')).toBeInTheDocument();
    expect(getByTestId('dse-month-day--selected')).toHaveTextContent(
      clickedButton.textContent ?? '',
    );
  });
});

describe('Range', () => {
  test('Range should be selected', () => {
    const { getAllByTestId } = render(
      <Calendar
        startDate={new Date('2021-02-01T10:00:00.000Z')}
        endDate={new Date('2021-02-05T10:00:00.000Z')}
        setStartDate={() => {}}
        setEndDate={() => {}}
      />,
    );
    expect(getAllByTestId('dse-month-day--selected')).toHaveLength(5);
  });

  test('Selecting date if the start and end date is not same change there two', () => {
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const { getAllByTestId } = render(
      <Calendar
        startDate={new Date('2021-02-01T10:00:00.000Z')}
        endDate={new Date('2021-02-05T10:00:00.000Z')}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />,
    );
    act(() => {
      getAllByTestId('dse-month-day')[0].click();
    });
    expect(setStartDate).toHaveBeenCalled();
    expect(setEndDate).toHaveBeenCalled();
  });

  test('Selecting date if the start and end date is same and the selected is next date change only the end date', () => {
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const { getAllByTestId } = render(
      <Calendar
        startDate={new Date('2021-02-01T10:00:00.000Z')}
        endDate={new Date('2021-02-01T10:00:00.000Z')}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />,
    );
    act(() => {
      getAllByTestId('dse-month-day')[10].click();
    });
    expect(setStartDate).not.toHaveBeenCalled();
    expect(setEndDate).toHaveBeenCalled();
  });

  test('Selecting date if the start and end date is same and the selected is prev date change only the start date', () => {
    const setStartDate = jest.fn();
    const setEndDate = jest.fn();
    const { getAllByTestId } = render(
      <Calendar
        startDate={new Date('2021-02-02T10:00:00.000Z')}
        endDate={new Date('2021-02-02T10:00:00.000Z')}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />,
    );
    act(() => {
      getAllByTestId('dse-month-day')[0].click();
    });
    expect(setStartDate).toHaveBeenCalled();
    expect(setEndDate).not.toHaveBeenCalled();
  });
});
