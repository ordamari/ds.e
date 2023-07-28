import { useState } from 'react';
import { dateHelpers } from '@or.ds.e/helpers';
export type DateActions = {
  set: (date: Date) => void;
  prevMonth: () => Date;
  nextMonth: () => Date;
  prevYear: () => Date;
  nextYear: () => Date;
  setStartMonth: () => Date;
  setEndMonth: () => Date;
};

function useDate(initialDate: Date = new Date()) {
  const [date, setDate] = useState(initialDate);

  const prevMonth = () => {
    setDate((prev) => dateHelpers.prevMonth(prev));
    return dateHelpers.prevMonth(date);
  };

  const nextMonth = () => {
    setDate((prev) => dateHelpers.nextMonth(prev));
    return dateHelpers.nextMonth(date);
  };

  const prevYear = () => {
    setDate((prev) => dateHelpers.prevYear(prev));
    return dateHelpers.prevYear(date);
  };

  const nextYear = () => {
    setDate((prev) => dateHelpers.nextYear(prev));
    return dateHelpers.nextYear(date);
  };

  const setStartMonth = () => {
    setDate((prev) => dateHelpers.startMonth(prev));
    return dateHelpers.startMonth(date);
  };

  const setEndMonth = () => {
    setDate((prev) => dateHelpers.endMonth(prev));
    return dateHelpers.endMonth(date);
  };

  return [
    date,
    {
      set: setDate,
      prevMonth,
      prevYear,
      nextMonth,
      nextYear,
      setStartMonth,
      setEndMonth,
    } as DateActions,
  ] as const;
}

export default useDate;
