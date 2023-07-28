import React, { useMemo } from 'react';
import { dateHelpers } from '@or.ds.e/helpers';
import Text from '../../../atoms/Text/Text';

type DayProps = {
  cellDate: Date;
  startDate: Date;
  endDate: Date;
  date: Date;
  hoveredDate: Date | null;
  isCurrentMonth: boolean;
  handleClick: (date: Date) => void;
  setHoveredDate: (date: Date | null) => void;
};
function day({
  cellDate,
  endDate,
  hoveredDate,
  startDate,
  date,
  isCurrentMonth,
  handleClick,
  setHoveredDate,
}: DayProps) {
  const isSelectedDate = useMemo(
    () =>
      dateHelpers.isSameDate(date, cellDate) ||
      dateHelpers.isSameDate(startDate, cellDate) ||
      dateHelpers.isSameDate(endDate, cellDate) ||
      dateHelpers.isInRange([startDate, endDate], cellDate),
    [cellDate, endDate, startDate, date],
  );
  const isToday = useMemo(() => dateHelpers.isToday(cellDate), [cellDate]);
  const isHovered = useMemo(
    () =>
      hoveredDate
        ? dateHelpers.isSameDate(startDate, endDate) &&
          dateHelpers.isInRange([startDate, hoveredDate], cellDate)
        : false,
    [startDate, endDate, hoveredDate],
  );

  const className = useMemo(
    () =>
      `dse-calendar__month-day ${
        !isCurrentMonth ? 'dse-calendar__month-day--not-this-month' : ''
      }  ${isHovered ? 'dse-calendar__month-day--hovered' : ''} ${
        isSelectedDate ? 'dse-calendar__month-day--selected' : ''
      } ${isToday ? 'dse-calendar__month-day--today' : ''}`,
    [isHovered, isSelectedDate, isToday, isCurrentMonth],
  );

  const testId = useMemo(() => {
    if (isSelectedDate) return 'dse-month-day--selected';
    return isCurrentMonth ? 'dse-month-day' : 'dse-month-day--not-this-month';
  }, [isCurrentMonth, isSelectedDate]);

  return (
    <button
      onMouseEnter={setHoveredDate.bind(null, cellDate)}
      onMouseLeave={setHoveredDate.bind(null, null)}
      onClick={handleClick.bind(null, cellDate)}
      className={className}
      data-testid={testId}
    >
      <Text size="sm">{cellDate.getDate()}</Text>
    </button>
  );
}

export default day;
