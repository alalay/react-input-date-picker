import React from 'react';
import PropTypes from 'prop-types';

import Header from '../DateView/Header';
import HeaderTitle from '../DateView/HeaderTitle';
import MonthYearPicker from '../../pickers/MonthYearPicker';

function MonthYearView(props) {
  function goToMonthDate() {
    props.switchToDateView();
  }
  function onSelectMonth(monthIndex) {
    props.onSelectMonth(monthIndex);
  }
  return (
    <div className='monthYearView'>
      <Header
        left={
          <button className='btn btn-tertiary' onClick={goToMonthDate}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
              <path d='M15 7H4.4l4-4L7 1.6.6 8 7 14.4 8.4 13l-4-4H15z' />
            </svg>
          </button>
        }
        middle={<HeaderTitle {...props.calendar} />}
      />
      <MonthYearPicker
        calendar={props.calendar}
        onSelectMonth={onSelectMonth}
      />
    </div>
  );
}

MonthYearView.propTypes = {
  onSelectMonth: PropTypes.func.isRequired
};

export default MonthYearView;
