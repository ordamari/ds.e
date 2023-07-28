import { dateHelpers } from '@or.ds.e/helpers';
import { useDate } from '@or.ds.e/hooks';
import { useMemo, useState } from 'react';

function useCalendarRangeDates(
  startDate: Date,
  setStartDate: (date: Date) => void,
  endDate: Date,
  setEndDate: (date: Date) => void,
) {
  const [shownDate, shownDateActions] = useDate(startDate);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const {
    isSameDates,
    currMonthDays,
    startMonthDay,
    endMonthDay,
    prevMonthDate,
    nextMonthDate,
    prevMonthLastDay,
  } = useMemo(() => {
    const startMonth = dateHelpers.startMonth(shownDate);
    const endMonth = dateHelpers.endMonth(shownDate);
    const currMonthDays =
      dateHelpers.differenceInDays(startMonth, endMonth) + 1;
    const startMonthDay = startMonth.getDay();
    const endMonthDay = endMonth.getDay();
    const prevMonthDate = dateHelpers.prevMonth(shownDate);
    const nextMonthDate = dateHelpers.nextMonth(shownDate);
    const prevMonthLastDay = dateHelpers.endMonth(prevMonthDate).getDate();
    const isSameDates = dateHelpers.isSameDate(startDate, endDate);
    return {
      isSameDates,
      currMonthDays,
      startMonthDay,
      endMonthDay,
      prevMonthDate,
      nextMonthDate,
      prevMonthLastDay,
    };
  }, [shownDate, startDate, endDate]);

  const onShowedMonthDateClicked = (selectedDate: Date) => {
    if (isSameDates) {
      if (dateHelpers.isSameDate(startDate, selectedDate)) return;
      if (selectedDate > startDate) setEndDate(selectedDate);
      else setStartDate(selectedDate);
    } else {
      setStartDate(selectedDate);
      setEndDate(selectedDate);
    }
  };

  const onHiddenMonthClicked = (selectedDate: Date) => {
    onShowedMonthDateClicked(selectedDate);
    shownDateActions.set(selectedDate);
  };

  return {
    shownDate,
    currMonthDays,
    startMonthDay,
    endMonthDay,
    prevMonthDate,
    nextMonthDate,
    prevMonthLastDay,
    hoveredDate,
    shownDateActions,
    setHoveredDate,
    onShowedMonthDateClicked,
    onHiddenMonthClicked,
  };
}

export default useCalendarRangeDates;
