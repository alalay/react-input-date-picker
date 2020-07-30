import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { Popper } from 'react-popper';

import FocusManager from '../FocusManager';
import Input from './Input';
import Picker from './Picker';
import Manager from './Manager/Manager.component';
import { focusOnCalendar } from '../gesture/withCalendarGesture';

function InputDatePicker(props) {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [showPicker, togglePicker] = useState(false);
  const [picked, setPicked] = useState(false);

  function openPicker() {
    togglePicker(true);
  }

  function closePicker() {
    // togglePicker(false);
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

  function onChange(event, origin) {
    if (origin === 'PICKER') {
      inputRef.current.focus();
      setPicked(true);
      closePicker();
    }
  }
  function onKeyDown(event) {
    switch (event.keyCode) {
      case keycode.codes.down:
        if (!showPicker) {
          openPicker();
        } else {
          focusOnCalendar(containerRef.current);
        }
        break;
      case keycode.codes.esc:
        if (showPicker) {
          closePicker();
        }
        break;
      default:
        break;
    }
  }
  return (
    <Manager onChange={onChange} value={props.value}>
      <FocusManager
        onClick={onClick}
        onFocusIn={onFocus}
        onFocusOut={onBlur}
        divRef={containerRef}
      >
        <Input ref={inputRef} onKeyDown={onKeyDown} />
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
