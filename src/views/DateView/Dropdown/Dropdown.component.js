import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

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
  function onSelect() {
    setOpen(false);
  }
  return (
    <div className={dropdownClass} ref={ref}>
      <div>
        <button className='btn btn-info btn-tertiary' onClick={onToggle}>
          {label}
        </button>
      </div>
      <div className='dropdown-menu'>{children(onSelect)}</div>
    </div>
  );
}

export default Dropdown;
