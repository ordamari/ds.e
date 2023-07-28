import React from 'react';
import useCalendarRelevantHandlers from './hooks/useCalendarRelevantHandlers';
import ShownDateActions from './components/ShownDateActions';
import WeekDays from './components/WeekDays';
import MonthDays from './components/MonthDays';

export type OptionalCalendarProps = {
  daysOfWeek?: [string, string, string, string, string, string, string];
  monthsOfYear?: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];
};

export type CalendarProps = {
  date: Date;
  setDate: (date: Date) => void;
} & OptionalCalendarProps;

export type CalendarRangeDate = {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
} & OptionalCalendarProps;

function Calendar(props: CalendarProps | CalendarRangeDate) {
  const {
    shownDate,
    currMonthDays,
    startMonthDay,
    endMonthDay,
    prevMonthDate,
    nextMonthDate,
    prevMonthLastDay,
    hoveredDate,
    date,
    startDate,
    endDate,
    shownDateActions,
    setHoveredDate,
    onShowedMonthDateClicked,
    onHiddenMonthClicked,
  } = useCalendarRelevantHandlers(props);

  return (
    <div className="dse-calendar">
      <ShownDateActions
        shownDate={shownDate}
        shownDateActions={shownDateActions}
      />
      <WeekDays daysOfWeek={props.daysOfWeek} />
      <MonthDays
        currMonthDays={currMonthDays}
        startMonthDay={startMonthDay}
        endMonthDay={endMonthDay}
        prevMonthDate={prevMonthDate}
        nextMonthDate={nextMonthDate}
        prevMonthLastDay={prevMonthLastDay}
        hoveredDate={hoveredDate}
        startDate={startDate}
        endDate={endDate}
        shownDate={shownDate}
        date={date}
        setHoveredDate={setHoveredDate}
        onShowedMonthDateClicked={onShowedMonthDateClicked}
        onHiddenMonthClicked={onHiddenMonthClicked}
      />
    </div>
  );
}

export default Calendar;
