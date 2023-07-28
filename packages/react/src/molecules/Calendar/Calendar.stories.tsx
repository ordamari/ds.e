import React from 'react';
import Calendar from './Calendar';
import { useDate } from '@or.ds.e/hooks';
import '@or.ds.e/scss/lib/Calendar.css';

export default {
  title: 'molecules/Calendar',
};

function TestCalendar() {
  const [date, dateActions] = useDate();
  return <Calendar date={date} setDate={dateActions.set} />;
}

function TestCalendarRange() {
  const [startDate, startDateActions] = useDate();
  const [endDate, endDateActions] = useDate();
  return (
    <Calendar
      startDate={startDate}
      endDate={endDate}
      setStartDate={startDateActions.set}
      setEndDate={endDateActions.set}
    />
  );
}

export const Common = () => <TestCalendar />;
export const Range = () => <TestCalendarRange />;
