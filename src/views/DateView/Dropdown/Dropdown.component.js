import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import DropdownContext from './DropdownContext';

function useDropdownMenu() {
  const { show, toggle } = useContext(DropdownContext);
  return {
    show,
    close: () => toggle(false)
  };
}
function Menu({ children }) {
  const { show, close, props } = useDropdownMenu();
  const dropdownClass = classNames('dropdown-menu', { open: show });
  return (
    <div className={dropdownClass} onClick={close}>
      {children}
    </div>
  );
}

function useDropdownToggle() {
  const { toggle, show } = useContext(DropdownContext);
  return [{}, { toggle, show }];
}
function Toggle({ children }) {
  const [props, { toggle }] = useDropdownToggle();
  return (
    <button {...props} onClick={toggle}>
      {children}
    </button>
  );
}

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

  // function handleDocumentClick(event) {
  //   if (!ref.current.contains(event.target)) {
  //     setOpen(false);
  //   }
  // }
  // useEffect(() => {
  //   document.addEventListener('click', handleDocumentClick, false);
  //   return () =>
  //     document.removeEventListener('click', handleDocumentClick, false);
  // });

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
