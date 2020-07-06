import React from 'react';
import PropTypes from 'prop-types';

import HeaderTitle from './HeaderTitle';
import DatePicker from '../../pickers/DatePicker';
import ViewLayout from '../ViewLayout';

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
  function incrementMonthIndex(increment) {
    const monthIncremented = props.calendar.monthIndex + increment;
    const nextMonthIndex = euclideanModulo(monthIncremented, 12);
    const yearIncrement = Math.floor(monthIncremented / 12);
    const nextYear = props.calendar.year + yearIncrement;

    selectMonth(nextMonthIndex, nextYear);
  }
  function goPrevious() {
    incrementMonthIndex(-1);
  }
  function goNext() {
    incrementMonthIndex(1);
  }

  const header = {
    leftElement: (
      <button
        className='btn btn-tertiary btn-icon-only'
        onClick={() => goPrevious()}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
          <path d='M15 7H4.4l4-4L7 1.6.6 8 7 14.4 8.4 13l-4-4H15z' />
        </svg>
      </button>
    ),
    middleElement: (
      <HeaderTitle {...props.calendar} onTitleClick={props.onTitleClick} />
    ),
    rightElement: (
      <button
        className='btn btn-tertiary btn-icon-only'
        onClick={() => goNext()}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
          <path d='M1 9h10.7l-4 4 1.4 1.4L15.5 8 9.1 1.6 7.7 3l4 4H1z' />
        </svg>
      </button>
    )
  };
  const bodyElement = (
    <DatePicker
      calendar={props.calendar}
      selectedDate={props.selectedDate}
      onSelect={props.onSelectDate}
    />
  );
  return (
    <div className='dateview'>
      <ViewLayout header={header} bodyElement={bodyElement} />
    </div>
  );
}
DateView.propTypes = {
  calendar: PropTypes.shape({
    monthIndex: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
  }),
  onSelectMonthYear: PropTypes.func,
  onSelectDate: PropTypes.func
};
DateView.defaultProps = {
  onSelectMonthYear: (monthIndex, year) => {
    console.log({ monthIndex, year });
  }
};

export default DateView;
