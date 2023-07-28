import { useMemo } from 'react';
import { CalendarProps, CalendarRangeDate } from '../Calendar';
import useCalendarDate from './useCalendarDate';
import useCalendarRangeDates from './useCalendarRangeDates';

function useCalendarRelevantHandlers(props: CalendarProps | CalendarRangeDate) {
  const { date, setDate, endDate, setEndDate, startDate, setStartDate } =
    useMemo(() => {
      if ('startDate' in props) {
        return {
          date: props.startDate,
          startDate: props.startDate,
          endDate: props.endDate,
          setDate: props.setStartDate,
          setStartDate: props.setStartDate,
          setEndDate: props.setEndDate,
        };
      }
      return {
        date: props.date,
        startDate: props.date,
        endDate: props.date,
        setDate: props.setDate,
        setStartDate: props.setDate,
        setEndDate: props.setDate,
      };
    }, [props]);

  const calendarHandlers = useCalendarDate(date, setDate);
  const rangeCalendarHandlers = useCalendarRangeDates(
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  );

  const handlers = useMemo(() => {
    if ('startDate' in props) {
      return rangeCalendarHandlers;
    }
    return { ...calendarHandlers, hoveredDate: null, setHoveredDate: () => {} };
  }, [props, rangeCalendarHandlers, calendarHandlers]);

  return { ...handlers, startDate, endDate, date };
}

export default useCalendarRelevantHandlers;
