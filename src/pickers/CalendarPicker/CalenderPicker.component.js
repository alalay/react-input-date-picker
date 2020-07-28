import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import startOfDay from 'date-fns/startOfDay';
import DateView from '../../views/DateView';
import MonthYearView from '../../views/MonthYearView';

import theme from './CalendarPicker.scss';

function CalendarPicker(props) {
  const initialCalendarDate = props.selectedDate || new Date();
  const initialCalendar = {
    monthIndex: getMonth(initialCalendarDate),
    year: getYear(initialCalendarDate)
  };
  const [selectedDate, setSelectedDate] = useState(initialCalendarDate);
  const [calendar, setCalendar] = useState(initialCalendar);
  const [isDateView, setDateView] = useState(true);

  function onSubmit(event, date) {
    props.onSubmit(event, { date });
  }

  function onSelectMonthYear(monthIndex, year, callback) {
    setCalendar({ monthIndex, year });
  }
  function onSelectDate(event, date) {
    event.persist();
    setSelectedDate(date);
    setTimeout(() => {
      onSubmit(event, date);
    });
  }
  function onClickToday(event) {
    const now = new Date();
    const today = startOfDay(now);
    onSelectDate(event, today);
  }
  function onTitleClick(event, currentMonthYear) {
    setDateView(false);
  }
  function onSelectMonth(monthIndex) {
    setCalendar({ ...calendar, monthIndex });
  }
  function onSelectYear(event, year) {
    setCalendar({ ...calendar, year });
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
        onSelectMonth={onSelectMonth}
        onSelectYear={onSelectYear}
      />
    );
  }
  return (
    <div className={theme['calendar-container']}>
      {viewElement}
      <div className={theme.footer}>
        <button className='btn btn-info btn-tertiary' onClick={onClickToday}>
          <span>today</span>
        </button>
      </div>
    </div>
  );
}

CalendarPicker.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CalendarPicker;
