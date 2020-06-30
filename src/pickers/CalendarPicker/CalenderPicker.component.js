import React, { useState } from 'react';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import DateView from '../../views/DateView';

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
  return (
    <DateView
      selectedDate={selectedDate}
      calendar={calendar}
      onSelect={(_, date) => setSelectedDate(date)}
      onSelectMonthYear={onSelectMonthYear}
    />
  );
}

export default CalendarPicker;
