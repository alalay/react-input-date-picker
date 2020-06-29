import React from 'react';
import Header from './Header';
import HeaderTitle from './HeaderTitle';
import DatePicker from '../../pickers/DatePicker';

function DateView(props) {
  return (
    <div className='dateview'>
      <Header
        left={
          <button className='btn btn-tertiary'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
              <path d='M15 7H4.4l4-4L7 1.6.6 8 7 14.4 8.4 13l-4-4H15z' />
            </svg>
          </button>
        }
        middle={<HeaderTitle monthIndex={5} year={2020} />}
        right={
          <button className='btn btn-tertiary'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
              <path d='M1 9h10.7l-4 4 1.4 1.4L15.5 8 9.1 1.6 7.7 3l4 4H1z' />
            </svg>
          </button>
        }
      />
      <DatePicker />
    </div>
  );
}

export default DateView;
