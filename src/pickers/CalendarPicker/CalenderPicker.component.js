import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import startOfDay from 'date-fns/startOfDay';
import DateView from '../../views/DateView';

import theme from './Calendar.scss';

function CalendarPicker(props) {
  const initialCalendarDate = props.selectedDate || new Date();
  const initialCalendar = {
    monthIndex: getMonth(initialCalendarDate),
    year: getYear(initialCalendarDate)
  };
  const [selectedDate, setSelectedDate] = useState(initialCalendarDate);
  const [calendar, setCalendar] = useState(initialCalendar);

  function onSelectMonthYear(monthIndex, year) {
    setCalendar({ monthIndex, year });
  }
  function onClickToday(event) {
    const now = new Date();
    const today = startOfDay(now);
    props.onSelectDate(event, today);
  }
  return (
    <div className={theme['calendar-container']}>
      <DateView
        selectedDate={selectedDate}
        calendar={calendar}
        onSelect={(_, date) => setSelectedDate(date)}
        onSelectMonthYear={onSelectMonthYear}
      />
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
}

export default CalendarPicker;
