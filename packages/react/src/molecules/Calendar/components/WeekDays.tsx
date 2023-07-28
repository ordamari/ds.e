import React from 'react';
import { OptionalCalendarProps } from '../Calendar';
import Text from '../../../atoms/Text/Text';

function WeekDays({
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
}: OptionalCalendarProps) {
  return (
    <div className="dse-calendar__week-days">
      {Array.from(Array(7).keys()).map((day) => (
        <div key={day} className="dse-calendar__week-day">
          <Text>{daysOfWeek[day]}</Text>
        </div>
      ))}
    </div>
  );
}

export default WeekDays;
