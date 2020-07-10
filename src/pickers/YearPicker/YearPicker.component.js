import React from 'react';

import { buildYears } from '../../generator';

import theme from './YearPicker.scss';

function YearPicker(props) {
  const years = buildYears();
  return (
    <div className={theme['year-picker']}>
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
    </div>
  );
}

export default YearPicker;
