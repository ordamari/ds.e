import React from 'react';
import { DateActions } from '@or.ds.e/hooks';
import Icon from '../../../atoms/Icon/Icon';
import { OptionalCalendarProps } from '../Calendar';
import Text from '../../../atoms/Text/Text';

type ShownDateActionsProps = {
  shownDate: Date;
  shownDateActions: DateActions;
} & OptionalCalendarProps;

function ShownDateActions({
  shownDate,
  shownDateActions,
  monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}: ShownDateActionsProps) {
  return (
    <div className="dse-calendar__month-change">
      <button data-testid="prev-year" onClick={shownDateActions.prevYear}>
        <Icon icon="double-arrow-left" />
      </button>
      <button data-testid="prev-month" onClick={shownDateActions.prevMonth}>
        <Icon icon="arrow-left" />
      </button>
      <Text>
        {monthsOfYear[shownDate.getMonth()]} {shownDate.getFullYear()}
      </Text>
      <button data-testid="next-month" onClick={shownDateActions.nextMonth}>
        <Icon icon="arrow-right" />
      </button>
      <button data-testid="next-year" onClick={shownDateActions.nextYear}>
        <Icon icon="double-arrow-right" />
      </button>
    </div>
  );
}

export default ShownDateActions;
