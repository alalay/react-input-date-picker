import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

Input.displayName = 'Date.Input';

export default Input;
