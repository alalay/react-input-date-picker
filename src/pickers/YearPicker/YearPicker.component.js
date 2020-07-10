import React from 'react';

import theme from './YearPicker.scss';

function YearPicker() {
  const years = ['2018', '2019', '2020', '2021'];
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
