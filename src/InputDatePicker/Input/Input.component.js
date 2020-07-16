import React, { forwardRef, useContext } from 'react';
import { DateContext } from '../Context';

const Input = forwardRef((props, ref) => {
  const { value } = useContext(DateContext);
  return <input {...props} ref={ref} value={value.textInput} />;
});

Input.displayName = 'Date.Input';

export default Input;
