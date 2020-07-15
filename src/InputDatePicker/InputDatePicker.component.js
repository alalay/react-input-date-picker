import React, { useRef, useState } from 'react';
import { Popper } from 'react-popper';

import Input from './Input';

function InputDatePicker(props) {
  const inputRef = useRef(null);
  const [showPicker, togglePicker] = useState(false);
  return (
    <div>
      <Input
        ref={inputRef}
        onFocus={() => {
          togglePicker(true);
        }}
      />
      {showPicker && (
        <Popper referenceElement={inputRef.current} placement='bottom'>
          {({ style, ref }) => (
            <div style={style} ref={ref}>
              <p style={{ border: 'solid 1px black' }}>hello world</p>
            </div>
          )}
        </Popper>
      )}
    </div>
  );
}

export default InputDatePicker;
