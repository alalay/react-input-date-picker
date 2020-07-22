import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import YearPicker from '../../../pickers/YearPicker';

function Dropdown(props) {
  const { label, children } = props;
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const dropdownClass = classNames('dropdown', { open: isOpen });

  function handleDocumentClick(event) {
    if (!ref.current.contains(event.target)) {
      setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, false);
    return () =>
      document.removeEventListener('click', handleDocumentClick, false);
  });
  function onToggle() {
    setOpen(!isOpen);
  }
  // function onSelect(...args) {
  //   if (props.onSelect) {
  //     props.onSelect(...args);
  //   }
  //   // setOpen(false);
  // }
  const onSelect = useCallback((...args) => {
    if (props.onSelect) {
      props.onSelect(...args);
    }
    // setOpen(false);
  });
  return (
    <div
      className={dropdownClass}
      ref={ref}
      onFocus={() => {
        console.log('onFocus dropdown');
      }}
    >
      <div>
        <button className='btn btn-info btn-tertiary' onClick={onToggle}>
          {children}
        </button>
      </div>
      <div className='dropdown-menu'>
        <YearPicker />
      </div>
    </div>
  );
}

export default Dropdown;
