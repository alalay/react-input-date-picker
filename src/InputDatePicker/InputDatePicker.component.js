import React, { useRef, useState } from 'react';
import { Popper } from 'react-popper';

import FocusManager from '../FocusManager';
import Input from './Input';
import Picker from './Picker';

function InputDatePicker(props) {
  const inputRef = useRef(null);
  const [showPicker, togglePicker] = useState(false);
  return (
    <FocusManager
      onFocusIn={() => togglePicker(true)}
      onFocusOut={() => togglePicker(false)}
    >
      <Input ref={inputRef} />
      {showPicker && (
        <Popper referenceElement={inputRef.current} placement='bottom'>
          {({ style, ref }) => (
            <div style={style} ref={ref}>
              <Picker />
            </div>
          )}
        </Popper>
      )}
    </FocusManager>
  );
}

export default InputDatePicker;
