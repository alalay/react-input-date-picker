import React from 'react';
import classNames from 'classnames';
import { Dropdown, useDropdownToggle, useDropdownMenu } from 'react-overlays';

function Menu({ children }) {
  const { show, close, props } = useDropdownMenu();
  const className = classNames('dropdown-menu', { open: show });
  return (
    <div {...props} className={className} onClick={close}>
      {children}
    </div>
  );
}
function Toggle({ children }) {
  const [props, { toggle }] = useDropdownToggle();
  return (
    <button
      type='button'
      className='btn btn-info btn-tertiary'
      {...props}
      onClick={toggle}
    >
      {children}
    </button>
  );
}

function DropdownButton({ title, children }) {
  return (
    <Dropdown>
      {({ props }) => (
        <div {...props} className='dropdown'>
          <Toggle>{title}</Toggle>
          <Menu>{children}</Menu>
        </div>
      )}
    </Dropdown>
  );
}

export default DropdownButton;
