import React from 'react';
import DateView from '../../views/DateView';

import theme from './Picker.scss';

import '../../shared/styles/common.scss';

function Picker(props) {
  return (
    <div className={theme.container} aria-label='Date picker'>
      <DateView />
    </div>
  );
}

export default Picker;
