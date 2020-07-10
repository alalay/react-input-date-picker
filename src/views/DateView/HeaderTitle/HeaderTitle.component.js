import React from 'react';
import PropTypes from 'prop-types';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import format from 'date-fns/format';

import theme from './HeaderTitle.css';

function HeaderTitle(props) {
  const date = setYear(setMonth(new Date(0), props.monthIndex), props.year);
  const label = format(date, 'MMMM yyyy');
  function onTitleClick(event) {
    props.onTitleClick(event, {
      monthIndex: props.monthIndex,
      year: props.year
    });
  }
  return (
    <div className={theme.header}>
      <button className='btn btn-info btn-tertiary' onClick={onTitleClick}>
        <span>{label}</span>
      </button>
    </div>
  );
}

HeaderTitle.protoType = {
  monthIndex: PropTypes.number,
  year: PropTypes.number
};

export default HeaderTitle;
