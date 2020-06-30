import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import HeaderTitle from './HeaderTitle';
import DatePicker from '../../pickers/DatePicker';

/**
 * Get the positive euclidean modulo number from a dividend and a divisor
 * @param {number} dividend Dividend
 * @param {number} divisor Divisor
 * @return {number} The positive euclidean modulo
 */
function euclideanModulo(dividend, divisor) {
  const modulo = ((dividend % divisor) + divisor) % divisor;
  return modulo < 0 ? modulo + Math.abs(divisor) : modulo;
}

function DateView(props) {
  function selectMonth(monthIndex, year) {
    props.onSelectMonthYear(monthIndex, year);
  }
  function goPrevious() {
    const monthIncremented = props.calendar.monthIndex - 1;
    const nextMonthIndex = euclideanModulo(monthIncremented, 12);
    const yearIncrement = Math.floor(monthIncremented / 12);
    const nextYear = props.calendar.year + yearIncrement;

    selectMonth(nextMonthIndex, nextYear);
  }
  function goNext() {
    const monthIncremented = props.calendar.monthIndex + 1;
    const nextMonthIndex = euclideanModulo(monthIncremented, 12);
    const yearIncrement = Math.floor(monthIncremented / 12);
    const nextYear = props.calendar.year + yearIncrement;
    selectMonth(nextMonthIndex, nextYear);
  }
  return (
    <div className='dateview'>
      <Header
        left={
          <button className='btn btn-tertiary' onClick={() => goPrevious()}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
              <path d='M15 7H4.4l4-4L7 1.6.6 8 7 14.4 8.4 13l-4-4H15z' />
            </svg>
          </button>
        }
        middle={<HeaderTitle {...props.calendar} />}
        right={
          <button className='btn btn-tertiary' onClick={() => goNext()}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
              <path d='M1 9h10.7l-4 4 1.4 1.4L15.5 8 9.1 1.6 7.7 3l4 4H1z' />
            </svg>
          </button>
        }
      />
      <DatePicker />
    </div>
  );
}
DateView.propTypes = {
  calendar: PropTypes.shape({
    monthIndex: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
  }),
  onSelectMonthYear: PropTypes.func
};
DateView.defaultProps = {
  calendar: {
    monthIndex: 11,
    year: 2020
  },
  onSelectMonthYear: (monthIndex, year) => {
    console.log({ monthIndex, year });
  }
};

export default DateView;
