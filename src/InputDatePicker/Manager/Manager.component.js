import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DateContext } from '../Context';
import {
  extractFromDate,
  extractDate,
  extractPartsFromTextInput
} from '../date-extraction';

function Manager(props) {
  function getDateOptions() {
    return {
      dateFormat: props.dateFormat
    };
  }
  const [state, setState] = useState(() =>
    extractDate(props.value, getDateOptions())
  );
  function onChange(event, origin, payload) {
    if (props.onChange) {
      props.onChange(event, origin, payload);
    }
  }
  function onPickerChange(event, { date }) {
    const nextState = extractFromDate(date);
    setState(nextState);
    onChange(event, 'PICKER', nextState);
  }
  function onInputChange(event) {
    const { value } = event.target;
    const nextState = extractPartsFromTextInput(value, getDateOptions());
    setState(nextState);
    onChange(event, 'INPUT', nextState);
  }
  return (
    <DateContext.Provider
      value={{
        value: { textInput: state.textInput, date: state.date },
        inputManagement: { onChange: onInputChange },
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
