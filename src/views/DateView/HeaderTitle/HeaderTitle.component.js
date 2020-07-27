import React from 'react';
import PropTypes from 'prop-types';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import format from 'date-fns/format';

import YearPicker from '../../../pickers/YearPicker';
import DropdownButton from '../DropdownButton/DropdownButton';

import theme from './HeaderTitle.scss';

function HeaderTitle(props) {
  const date = setYear(setMonth(new Date(0), props.monthIndex), props.year);
  const label = format(date, 'MMMM yyyy');
  const monthLabel = format(date, 'MMMM');
  const yearLabel = format(date, 'yyyy');
  function onTitleClick(event) {
    props.onTitleClick(event, {
      monthIndex: props.monthIndex,
      year: props.year
    });
  }

  if (props.yearPicker) {
    return (
      <div className={theme.header}>
        <span className={theme.month}>{monthLabel}</span>
        <DropdownButton title={yearLabel}>
          <YearPicker onSelect={props.onSelectYear} />
        </DropdownButton>
      </div>
    );
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
  monthIndex: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  yearPicker: PropTypes.bool,
  onSelectYear: PropTypes.func.isRequired
};

export default HeaderTitle;
