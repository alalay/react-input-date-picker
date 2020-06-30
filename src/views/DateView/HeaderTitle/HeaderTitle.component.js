import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import format from 'date-fns/format';

import theme from './HeaderTitle.css';
import { getMonth } from 'date-fns/esm';
import { getYear } from 'date-fns';

function HeaderTitle(props) {
  const date = setYear(setMonth(new Date(0), props.monthIndex), props.year);
  const label = format(date, 'MMMM yyyy');
  return (
    <div className={theme.header}>
      <button className='btn btn-tertiary'>{label}</button>
    </div>
  );
}

HeaderTitle.protoType = {
  monthIndex: PropTypes.number,
  year: PropTypes.number
};

export default HeaderTitle;
