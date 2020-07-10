import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import isSameDay from 'date-fns/isSameDay';
import { buildDayNames, buildWeeks } from '../../generator';

import theme from './DatePicker.scss';

function DatePicker(props) {
  const { calendar } = props;
  const { year, monthIndex } = calendar;
  const dayNames = buildDayNames();
  const weeks = buildWeeks(year, monthIndex);
  function isSelected(date) {
    return props.selectedDate && isSameDay(props.selectedDate, date);
  }
  function isCurrentMonth(date) {
    return getMonth(date) === props.calendar.monthIndex;
  }
  return (
    <table className={theme.container}>
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
                  [theme['not-current-month']]: !currentMonth
                },
                'btn-default',
                'btn-tertiary'
              );
              return (
                <td key={j}>
                  <button
                    className={className}
                    onClick={(event) => props.onSelect(event, date)}
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
  onSelect: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
  onSelect: (event, date) => {
    console.log(date);
  }
};

export default DatePicker;
