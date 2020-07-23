import React from 'react';
import { Dropdown, useDropdownToggle, useDropdownMenu } from 'react-overlays';

const MenuContainer = React.forwardRef(({ show, children, onClick }, ref) => {
  const style = {
    display: show ? 'flex' : 'none',
    minWidth: '150px',
    position: 'absolute',
    zIndex: 1000,
    flexDirection: 'column',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
  };
  return (
    <div style={style} ref={ref} onClick={onClick}>
      {children}
    </div>
  );
});

function Menu({ children }) {
  const { show, close, props } = useDropdownMenu();
  return (
    <MenuContainer {...props} show={show} onClick={() => {}}>
      {children}
    </MenuContainer>
  );
}
function Toggle({ children }) {
  const [props, { toggle }] = useDropdownToggle();
  return (
    <button type='button' {...props} onClick={toggle}>
      {children}
    </button>
  );
}

function DropdownButton({ title, children }) {
  return (
    <Dropdown>
      {({ props }) => (
        <div {...props}>
          <Toggle>{title}</Toggle>
          <Menu>{children}</Menu>
        </div>
      )}
    </Dropdown>
  );
}

export default DropdownButton;
