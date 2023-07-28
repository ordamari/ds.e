import React from 'react';
import Day from './Day';

type MonthDaysProps = {
  startMonthDay: number;
  prevMonthLastDay: number;
  currMonthDays: number;
  endMonthDay: number;
  prevMonthDate: Date;
  nextMonthDate: Date;
  startDate: Date;
  endDate: Date;
  shownDate: Date;
  date: Date;
  hoveredDate: Date | null;
  setHoveredDate: (date: Date | null) => void;
  onHiddenMonthClicked: (date: Date) => void;
  onShowedMonthDateClicked: (date: Date) => void;
};
function MonthDays({
  startMonthDay,
  endMonthDay,
  prevMonthLastDay,
  prevMonthDate,
  nextMonthDate,
  startDate,
  endDate,
  hoveredDate,
  shownDate,
  date,
  currMonthDays,
  setHoveredDate,
  onHiddenMonthClicked,
  onShowedMonthDateClicked,
}: MonthDaysProps) {
  return (
    <div className="dse-calendar__month-days">
      {Array.from(Array(startMonthDay).keys()).map((idx) => {
        const day = prevMonthLastDay - startMonthDay + idx + 1;
        const cellDate = new Date(
          prevMonthDate.getFullYear(),
          prevMonthDate.getMonth(),
          day,
        );
        return (
          <Day
            key={cellDate.toString()}
            isCurrentMonth={false}
            cellDate={cellDate}
            endDate={endDate}
            hoveredDate={hoveredDate}
            startDate={startDate}
            date={date}
            handleClick={onHiddenMonthClicked}
            setHoveredDate={setHoveredDate}
          />
        );
      })}
      {Array.from(Array(currMonthDays).keys()).map((idx) => {
        const day = idx + 1;
        const cellDate = new Date(
          shownDate.getFullYear(),
          shownDate.getMonth(),
          day,
        );

        return (
          <Day
            key={cellDate.toString()}
            isCurrentMonth={true}
            cellDate={cellDate}
            endDate={endDate}
            hoveredDate={hoveredDate}
            startDate={startDate}
            date={date}
            handleClick={onShowedMonthDateClicked}
            setHoveredDate={setHoveredDate}
          />
        );
      })}
      {Array.from(Array(6 - endMonthDay).keys()).map((idx) => {
        const day = idx + 1;
        const cellDate = new Date(
          nextMonthDate.getFullYear(),
          nextMonthDate.getMonth(),
          day,
        );
        return (
          <Day
            key={cellDate.toString()}
            isCurrentMonth={false}
            cellDate={cellDate}
            endDate={endDate}
            hoveredDate={hoveredDate}
            startDate={startDate}
            date={date}
            handleClick={onHiddenMonthClicked}
            setHoveredDate={setHoveredDate}
          />
        );
      })}
    </div>
  );
}

export default MonthDays;
