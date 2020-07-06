import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getDate from 'date-fns/getDate';
import { buildDayNames, buildWeeks } from '../../generator';

import theme from './DatePicker.scss';
import { isSameDay } from 'date-fns/esm';

function DatePicker(props) {
  const { calendar } = props;
  const { year, monthIndex } = calendar;
  const dayNames = buildDayNames();
  const weeks = buildWeeks(year, monthIndex);
  // const classname = classNames(theme['calendar-day']);
  function isSelected(date) {
    return props.selectedDate && isSameDay(props.selectedDate, date);
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
              const className = classNames(theme['calendar-day'], {
                [theme.selected]: selected
              });
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
