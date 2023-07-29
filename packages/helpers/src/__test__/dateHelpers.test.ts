import dateHelpers from '../dateHelpers';

it('should return the start of the month', () => {
  const date = new Date(2020, 0, 15);
  const startMonth = new Date(2020, 0, 1);
  expect(dateHelpers.startMonth(date)).toEqual(startMonth);
});

it('should return the end of the month', () => {
  const date = new Date(2020, 0, 15);
  const endMonth = new Date(2020, 0, 31);
  expect(dateHelpers.endMonth(date)).toEqual(endMonth);
});

it('should return the difference in milliseconds', () => {
  const date1 = new Date(2020, 0, 15);
  const date2 = new Date(2020, 0, 16);
  expect(dateHelpers.differenceInMs(date1, date2)).toEqual(86400000);
});

it('should return the difference in days', () => {
  const date1 = new Date(2020, 0, 15);
  const date2 = new Date(2020, 0, 16);
  expect(dateHelpers.differenceInDays(date1, date2)).toEqual(1);
});

it('should return the previous month', () => {
  const date = new Date(2020, 0, 15);
  const prevMonth = new Date(2019, 11, 1);
  expect(dateHelpers.prevMonth(date)).toEqual(prevMonth);
});

it('should return the next month', () => {
  const date = new Date(2020, 0, 15);
  const nextMonth = new Date(2020, 1, 1);
  expect(dateHelpers.nextMonth(date)).toEqual(nextMonth);
});

it('should return the next year', () => {
  const date = new Date(2020, 0, 15);
  const nextYear = new Date(2021, 0, 1);
  expect(dateHelpers.nextYear(date)).toEqual(nextYear);
});

it('should return the previous year', () => {
  const date = new Date(2020, 0, 15);
  const prevYear = new Date(2019, 0, 1);
  expect(dateHelpers.prevYear(date)).toEqual(prevYear);
});

it('should return true if the date is today', () => {
  const today = new Date();
  expect(dateHelpers.isToday(today)).toEqual(true);
});

it('should return false if the date is not today', () => {
  const date = new Date(2020, 0, 15);
  expect(dateHelpers.isToday(date)).toEqual(false);
});

it('should return true if the dates are the same', () => {
  const date1 = new Date(2020, 0, 15, 12);
  const date2 = new Date(2020, 0, 15);
  expect(dateHelpers.isSameDate(date1, date2)).toEqual(true);
});

it('should return false if the dates are not the same', () => {
  const date1 = new Date(2020, 0, 15, 12);
  const date2 = new Date(2020, 0, 16);
  expect(dateHelpers.isSameDate(date1, date2)).toEqual(false);
});

it('should return true if the date is in the range', () => {
  const date = new Date(2020, 0, 15);
  const dates = [new Date(2020, 0, 1), new Date(2020, 0, 31)] as [Date, Date];
  expect(dateHelpers.isInRange(dates, date)).toEqual(true);
});

it('should return false if the date is not in the range', () => {
  const date = new Date(2020, 1, 15);
  const dates = [new Date(2020, 0, 1), new Date(2020, 0, 31)] as [Date, Date];
  expect(dateHelpers.isInRange(dates, date)).toEqual(false);
});
