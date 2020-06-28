import React from 'react';

import HeaderTitle from './HeaderTitle';
import theme from './Picker.scss';

function Picker(props) {
  return (
    <div className={theme.container} aria-label='Date picker'>
      <div className={theme.header}>
        <HeaderTitle />
      </div>
    </div>
  );
}

export default Picker;
