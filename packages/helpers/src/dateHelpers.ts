const dateHelpers = {
  startMonth,
  endMonth,
  differenceInMs,
  differenceInDays,
  prevMonth,
  nextMonth,
  prevYear,
  nextYear,
  isToday,
  isSameDate,
  isInRange,
};

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function startMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth());
}

function endMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function differenceInMs(date1: Date, date2: Date): number {
  return Math.abs(date1.getTime() - date2.getTime());
}

function differenceInDays(date1: Date, date2: Date): number {
  return Math.round(differenceInMs(date1, date2) / DAY);
}

function prevMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

function nextMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function nextYear(date: Date): Date {
  return new Date(date.getFullYear() + 1, date.getMonth(), 1);
}

function prevYear(date: Date): Date {
  return new Date(date.getFullYear() - 1, date.getMonth(), 1);
}

function isToday(date: Date): boolean {
  const today = new Date();
  return isSameDate(date, today);
}

function isSameDate(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}

function isInRange(dates: [Date, Date], date: Date): boolean {
  if (!date) return false;
  if (!dates[0]) return false;
  if (!dates[1]) return false;
  return (
    (date > dates[0] && date < dates[1]) ||
    (date > dates[1] && date < dates[0]) ||
    isSameDate(dates[0], date) ||
    isSameDate(dates[1], date)
  );
}

export default dateHelpers;
