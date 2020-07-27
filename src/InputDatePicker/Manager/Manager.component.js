import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DateContext } from '../Context';
import { extractFromDate, extractDate } from '../date-extraction';

function Manager(props) {
  function getDateOptions() {
    return {
      dateFormat: props.dateFormat
    };
  }
  const [state, setState] = useState(() =>
    extractDate(props.value, getDateOptions())
  );
  function onPickerChange(event, { date }) {
    const nextState = extractFromDate(date);
    setState(nextState);
    props.onChange(event);
  }
  return (
    <DateContext.Provider
      value={{
        value: { textInput: state.textInput, date: state.date },
        inputManagement: { onChange: () => {} },
        pickerManagement: { onSubmit: onPickerChange }
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
}

Manager.propTypes = {
  value: PropTypes.string
};
Manager.defaultProps = {
  dateFormat: 'yyyy-MM-dd'
};

export default Manager;
