import React from 'react';
import Header from './Header';
import HeaderTitle from './HeaderTitle';
import DatePicker from '../../pickers/DatePicker';

function DateView(props) {
  return (
    <div className='dateview'>
      <Header middle={<HeaderTitle monthIndex={5} year={2020} />} />
      <DatePicker />
    </div>
  );
}

export default DateView;
