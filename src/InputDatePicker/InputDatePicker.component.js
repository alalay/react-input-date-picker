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

  function onFocus() {
    if (!picked) {
      openPicker();
    }
  }
  function onBlur(event) {
    closePicker();
    if (props.onBlur) {
      props.onBlur(event);
    }
  }
  function onClick() {
    openPicker();
  }

  function onChange(event) {
    inputRef.current.focus();
    setPicked(true);
    closePicker();
  }
  return (
    <Manager onChange={onChange} value={props.value}>
      <FocusManager onClick={onClick} onFocusIn={onFocus} onFocusOut={onBlur}>
        <Input ref={inputRef} />
        {showPicker && (
          <Popper referenceElement={inputRef.current} placement='bottom'>
            {({ style, ref }) => (
              <div
                style={style}
                ref={ref}
                onMouseDown={(event) => event.stopPropagation()}
              >
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
