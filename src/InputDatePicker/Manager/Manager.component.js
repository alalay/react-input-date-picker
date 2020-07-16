import React, { useState } from 'react';

import { DateContext } from '../Context';

function Manager(props) {
  const [state, setState] = useState({});
  function onPickerChange(event, { date }) {
    console.log(date);
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
