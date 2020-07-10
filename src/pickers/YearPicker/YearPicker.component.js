import React, { useState } from 'react';

import { buildYears } from '../../generator';

import theme from './YearPicker.scss';

const YEAR_WINDOW_OVERFLOW_SIZE = 3;

function YearPicker(props) {
  const [years, setYears] = useState(buildYears());
  function getMiddleYear() {
    return years[Math.floor(years.length / 2)];
  }
  function scroll(pace) {
    setYears(buildYears(getMiddleYear() + pace, YEAR_WINDOW_OVERFLOW_SIZE));
  }
  function onScrollUp() {
    scroll(-1);
  }
  function onScrollDown() {
    scroll(1);
  }
  return (
    <div className={theme['year-picker']}>
      <button
        className='btn btn-info btn-tertiary btn-icon-only'
        onClick={onScrollUp}
      >
        <svg
          className='rotate-90'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
        >
          <path d='M10.914 15.936L2.979 8 10.914.064l2.107 2.108L7.193 8l5.828 5.828-2.107 2.108z' />
        </svg>
      </button>
      <ol>
        {years.map((year, index) => (
          <li key={index}>
            <button
              className='btn btn-default btn-tertiary'
              onClick={(event) => props.onSelect(event, year)}
            >
              {year}
            </button>
          </li>
        ))}
      </ol>
      <button
        className='btn btn-info btn-tertiary btn-icon-only'
        onClick={onScrollDown}
      >
        <svg
          className='rotate-b-90'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
        >
          <path d='M10.914 15.936L2.979 8 10.914.064l2.107 2.108L7.193 8l5.828 5.828-2.107 2.108z' />
        </svg>
      </button>
    </div>
  );
}

export default YearPicker;
