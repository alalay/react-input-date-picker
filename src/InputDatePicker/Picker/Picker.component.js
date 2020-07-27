import React, { useContext } from 'react';
import CalendarPicker from '../../pickers/CalendarPicker';
import { DateContext } from '../Context';

import theme from './Picker.scss';
import '../../shared/styles/common.scss';

function Picker(props) {
  const { value, pickerManagement } = useContext(DateContext);
  return (
    <div className={theme.container} aria-label='Date picker'>
      <CalendarPicker selectedDate={value.date} {...pickerManagement} />
    </div>
  );
}

export default Picker;
