import React, { useState } from 'react';
import classNames from 'classnames';

function Dropdown(props) {
  const { label, children } = props;
  const [isOpen, setOpen] = useState(false);
  const dropdownClass = classNames('dropdown', { open: isOpen });
  function onToggle() {
    setOpen(!isOpen);
  }
  return (
    <div className={dropdownClass}>
      <div>
        <button className='btn btn-info btn-tertiary' onClick={onToggle}>
          {label}
        </button>
      </div>
      <div className='dropdown-menu'>{children}</div>
    </div>
  );
}

export default Dropdown;
