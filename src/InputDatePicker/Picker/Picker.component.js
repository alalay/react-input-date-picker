import React from 'react';

import HeaderTitle from '../../views/DateView/HeaderTitle';
import Header from '../../views/DateView/Header';
import theme from './Picker.scss';

function Picker(props) {
  return (
    <div className={theme.container} aria-label='Date picker'>
      <div className='dateview'>
        <Header middle={<HeaderTitle monthIndex={5} year={2020} />} />
      </div>
    </div>
  );
}

export default Picker;
