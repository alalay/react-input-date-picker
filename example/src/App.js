import React from 'react';

import InputDatePicker, { DropdownButton } from 'react-input-date-picker';
import 'react-input-date-picker/dist/index.css';

const App = () => {
  return (
    <div>
      <InputDatePicker />
      <DropdownButton title='dropdown'/>
    </div>
  );
};

export default App;
