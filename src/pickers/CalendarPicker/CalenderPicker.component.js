import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import startOfDay from 'date-fns/startOfDay';
import DateView from '../../views/DateView';
import MonthYearView from '../../views/MonthYearView';

import theme from './Calendar.scss';

function CalendarPicker(props) {
  const initialCalendarDate = props.selectedDate || new Date();
  const initialCalendar = {
    monthIndex: getMonth(initialCalendarDate),
    year: getYear(initialCalendarDate)
  };
  const [selectedDate, setSelectedDate] = useState(initialCalendarDate);
  const [calendar, setCalendar] = useState(initialCalendar);
  const [isDateView, setDateView] = useState(false);

  function onSelectMonthYear(monthIndex, year) {
    setCalendar({ monthIndex, year });
  }
  function onSelectDate(event, date) {
    setSelectedDate(date);
    props.onSelectDate(event, date);
  }
  function onClickToday(event) {
    const now = new Date();
    const today = startOfDay(now);
    props.onSelectDate(event, today);
  }
  function onTitleClick(event, currentMonthYear) {
    setDateView(false);
  }

  let viewElement;
  if (isDateView) {
    viewElement = (
      <DateView
        selectedDate={selectedDate}
        calendar={calendar}
        onSelectDate={onSelectDate}
        onSelectMonthYear={onSelectMonthYear}
        onTitleClick={onTitleClick}
      />
    );
  } else {
    viewElement = (
      <MonthYearView
        calendar={calendar}
        switchToDateView={() => {
          setDateView(true);
        }}
      />
    );
  }
  return (
    <div className={theme['calendar-container']}>
      {viewElement}
      <div className={theme.footer}>
        <button className='btn btn-tertiary' onClick={onClickToday}>
          Today
        </button>
      </div>
    </div>
  );
}

CalendarPicker.propTypes = {
  onSelectDate: PropTypes.func.isRequired
};

export default CalendarPicker;
