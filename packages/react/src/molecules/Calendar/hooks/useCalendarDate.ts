import { dateHelpers } from '@or.ds.e/helpers';
import { useDate } from '@or.ds.e/hooks';
import { useMemo } from 'react';
function useCalendarDate(date: Date, setDate: (date: Date) => void) {
  const [shownDate, shownDateActions] = useDate(date);

  const onShowedMonthDateClicked = (selectedDate: Date) => {
    setDate(selectedDate);
  };

  const onHiddenMonthClicked = (selectedDate: Date) => {
    setDate(selectedDate);
    shownDateActions.set(selectedDate);
  };

  const {
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
    return {
      currMonthDays,
      startMonthDay,
      endMonthDay,
      prevMonthDate,
      nextMonthDate,
      prevMonthLastDay,
    };
  }, [shownDate]);

  return {
    shownDate,
    currMonthDays,
    startMonthDay,
    endMonthDay,
    prevMonthDate,
    nextMonthDate,
    prevMonthLastDay,
    shownDateActions,
    onShowedMonthDateClicked,
    onHiddenMonthClicked,
  };
}

export default useCalendarDate;
