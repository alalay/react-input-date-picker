import React from 'react';
import CalendarPicker from '../../pickers/CalendarPicker';

import theme from './Picker.scss';
import '../../shared/styles/common.scss';

function Picker(props) {
  return (
    <div className={theme.container} aria-label='Date picker'>
      <CalendarPicker onSelectDate={(_, date) => console.log(date)} />
    </div>
  );
}

export default Picker;
