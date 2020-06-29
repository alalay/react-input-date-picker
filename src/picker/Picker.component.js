import React from 'react';

import HeaderTitle from './Header/HeaderTitle';
import Header from './Header';
import theme from './Picker.scss';

function Picker(props) {
  const header = <Header middle={<HeaderTitle monthIndex={5} year={2020} />} />;
  return (
    <div className={theme.container} aria-label='Date picker'>
      {header}
    </div>
  );
}

export default Picker;
