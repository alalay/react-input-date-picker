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
      <button onClick={onScrollUp}>up</button>
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
      <button onClick={onScrollDown}>down</button>
    </div>
  );
}

export default YearPicker;
