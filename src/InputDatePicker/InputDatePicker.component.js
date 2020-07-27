import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Popper } from 'react-popper';

import FocusManager from '../FocusManager';
import Input from './Input';
import Picker from './Picker';
import Manager from './Manager/Manager.component';

function InputDatePicker(props) {
  const inputRef = useRef(null);
  const [showPicker, togglePicker] = useState(false);
  const [picked, setPicked] = useState(false);

  function openPicker() {
    togglePicker(true);
  }

  function closePicker() {
    togglePicker(false);
  }

  function onChange(event) {
    inputRef.current.focus();
    setPicked(true);
    closePicker();
  }
  return (
    <Manager onChange={onChange} value={props.value}>
      <FocusManager onFocusIn={openPicker} onFocusOut={closePicker}>
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
    </Manager>
  );
}

InputDatePicker.propTypes = {
  value: PropTypes.string
};

export default InputDatePicker;
