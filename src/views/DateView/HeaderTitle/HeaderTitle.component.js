import React from 'react';
import PropTypes from 'prop-types';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import format from 'date-fns/format';

import theme from './HeaderTitle.css';

function HeaderTitle(props) {
  const date = setYear(setMonth(new Date(0), props.monthIndex), props.year);
  const label = format(date, 'MMMM yyyy');
  return <div className={theme.header}>{label}</div>;
}

HeaderTitle.protoType = {
  monthIndex: PropTypes.number,
  year: PropTypes.number
};

export default HeaderTitle;