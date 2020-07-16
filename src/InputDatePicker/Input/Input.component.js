import React, { forwardRef, useContext } from 'react';
import { DateContext } from '../Context';

const Input = forwardRef((props, ref) => {
  const { value, inputManagement } = useContext(DateContext);
  return <input {...inputManagement} ref={ref} value={value.textInput} />;
});

Input.displayName = 'Date.Input';

export default Input;
