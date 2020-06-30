import React from 'react';
import PropTypes from 'prop-types';
import getDate from 'date-fns/getDate';
import { buildDayNames, buildWeeks } from '../../generator';

function DatePicker(props) {
  const { calendar } = props;
  const { year, monthIndex } = calendar;
  const dayNames = buildDayNames();
  const weeks = buildWeeks(year, monthIndex);
  return (
    <table>
      <thead>
        <tr>
          {dayNames.map((day, idx) => (
            <th key={idx}>{day.abbr}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((date, j) => {
              const day = getDate(date);
              return (
                <td key={j}>
                  <button
                    className='btn btn-tertiary'
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
