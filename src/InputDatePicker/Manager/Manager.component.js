import React, { useState } from 'react';

import { DateContext } from '../Context';
import { extractFromDate } from '../date-extraction';

function Manager(props) {
  const [state, setState] = useState({ textInput: '' });
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

export default Manager;
