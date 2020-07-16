import React, { useState } from 'react';

import { DateContext } from '../Context';

function Manager(props) {
  const [state, setState] = useState({});
  return (
    <DateContext.Provider
      value={{ value: { textInput: state.textInput, date: state.localDate } }}
    >
      {props.children}
    </DateContext.Provider>
  );
}

export default Manager;
