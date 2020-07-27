import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import isSameDay from 'date-fns/isSameDay';
import isToday from 'date-fns/isToday';
import startOfMonth from 'date-fns/startOfMonth';
import { buildDayNames, buildWeeks } from '../../generator';
import { withCalendarGesture } from '../../gesture/withCalendarGesture';

import theme from './DatePicker.scss';

function DatePicker(props) {
  const { calendar } = props;
  const calendarRef = useRef(null);
  const { year, monthIndex } = calendar;
  const dayNames = buildDayNames();
  const weeks = buildWeeks(year, monthIndex);
  function isSelected(date) {
    return props.selectedDate && isSameDay(props.selectedDate, date);
  }
  function isCurrentMonth(date) {
    return getMonth(date) === props.calendar.monthIndex;
  }
  function onSelectDate(event, date, monthIndex, year) {
    if (!isCurrentMonth(date)) {
      if (date < startOfMonth(new Date(year, monthIndex))) {
        props.goToPreviousMonth();
      } else {
        props.goToNextMonth();
      }
    }
    props.onSelect(event, date);
  }
  return (
    <table className={theme.container} ref={calendarRef}>
      <thead>
        <tr className={theme['calendar-header']}>
          {dayNames.map((day, idx) => (
            <th key={idx}>
              <abbr>{day.abbr}</abbr>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i} className={theme['calendar-row']}>
            {week.map((date, j) => {
              const day = getDate(date);
              const selected = isSelected(date);
              const currentMonth = isCurrentMonth(date);
              const className = classNames(
                theme['calendar-day'],
                {
                  [theme.selected]: selected,
                  [theme['not-current-month']]: !currentMonth,
                  [theme.today]: isToday(date)
                },
                'btn-default',
                'btn-tertiary'
              );
              const buttonProps = currentMonth
                ? { 'data-value': day }
                : undefined;
              return (
                <td key={j}>
                  <button
                    type='button'
                    className={className}
                    onClick={(event) =>
                      onSelectDate(event, date, monthIndex, year)
                    }
                    onKeyDown={(event) =>
                      props.onKeyDown(event, calendarRef.current, day - 1)
                    }
                    {...buttonProps}
                  >
                    {day}
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DatePicker.propTypes = {
  calendar: PropTypes.shape({
    year: PropTypes.number.isRequired,
    monthIndex: PropTypes.number.isRequired
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  goToPreviousMonth: PropTypes.func.isRequired,
  goToNextMonth: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
  onSelect: (event, date) => {
    console.log(date);
  }
};

export default withCalendarGesture(DatePicker);
