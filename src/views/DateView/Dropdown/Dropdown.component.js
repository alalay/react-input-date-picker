import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { useUncontrolledProp } from 'uncontrollable';

import DropdownContext from './DropdownContext';

function Dropdown({ children }) {
  const [show, onToggle] = useState(false);
  const context = {
    show,
    toggle: () => onToggle(!show)
  };
  return (
    <DropdownContext.Provider value={context}>
      {children({ props: { onKeyDown: () => {} } })}
    </DropdownContext.Provider>
  );
}

function DropdownButton(props) {
  const { title, children } = props;
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

  const onSelect = useCallback((...args) => {
    setOpen(false);
  });
  return (
    <div className={dropdownClass} ref={ref}>
      <div>
        <button className='btn btn-info btn-tertiary' onClick={onToggle}>
          {title}
        </button>
      </div>
      <div className='dropdown-menu'>
        <div onClick={onSelect}>{children}</div>
      </div>
    </div>
  );
}


export default DropdownButton;
