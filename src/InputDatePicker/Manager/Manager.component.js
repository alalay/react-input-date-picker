import React, { useState } from 'react';

import { DateContext } from '../Context';
import { extractFromDate } from '../date-extraction';

function Manager(props) {
  const [state, setState] = useState({});
  function onPickerChange(event, { date }) {
    const nextState = extractFromDate(date);
    setState(nextState);
  }
  return (
    <DateContext.Provider
      value={{
        value: { textInput: state.textInput, date: state.localDate },
        pickerManagement: { onSubmit: onPickerChange }
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
}

export default Manager;
