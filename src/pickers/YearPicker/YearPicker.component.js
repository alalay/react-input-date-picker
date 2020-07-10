import React from 'react';

import theme from './YearPicker.scss';
import { buildYears } from '../../generator';

function YearPicker() {
  const years = buildYears();
  return (
    <div className={theme['year-picker']}>
      <ol>
        {years.map((year, index) => (
          <li key={index}>
            <button className='btn btn-default btn-tertiary'>{year}</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default YearPicker;
