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
  const [calendar, setCalendar] = useState(initialCalendar);
  return <DateView calendar={calendar} />;
}

export default CalendarPicker;
