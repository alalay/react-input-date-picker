import React from 'react';

import InputDatePicker, { DropdownButton } from 'react-input-date-picker';
import 'react-input-date-picker/dist/index.css';

const App = () => {
  return (
    <div>
      <InputDatePicker />
      <DropdownButton title='dropdown'>
        <button type='button'>item 1</button>
        <button type='button'>item 2</button>
      </DropdownButton>
    </div>
  );
};

export default App;
