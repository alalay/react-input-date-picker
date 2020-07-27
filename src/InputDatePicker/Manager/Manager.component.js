import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DateContext } from '../Context';
import { extractFromDate, extractDate } from '../date-extraction';

function Manager(props) {
  const [state, setState] = useState(() => extractDate(props.value));
  function onPickerChange(event, { date }) {
    const nextState = extractFromDate(date);
    setState(nextState);
    props.onChange(event);
  }
  return (
    <DateContext.Provider
      value={{
        value: { textInput: state.textInput, date: state.localDate },
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

export default Manager;
