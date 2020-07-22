import React from 'react';
import { Dropdown, useDropdownToggle, useDropdownMenu } from 'react-overlays';

const MenuContainer = React.forwardRef(({ show, children }, ref) => {
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
    <div style={style} ref={ref}>
      {children}
    </div>
  );
});

function Menu({ children }) {
  const { show, close, props } = useDropdownMenu();
  return (
    <MenuContainer {...props} show={show}>
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

function DropdownButton({ title }) {
  return (
    <Dropdown>
      {({ props }) => (
        <div {...props}>
          <Toggle>{title}</Toggle>
          <Dropdown.Menu>
            {({ props: menuProps }) =>
              React.forwardRef((props, ref) => (
                <div ref={ref} {...menuProps}>
                  <button type='button'>item 1</button>
                  <button type='button'>item 2</button>
                </div>
              ))
            }
          </Dropdown.Menu>
        </div>
      )}
    </Dropdown>
  );
}

export default DropdownButton;
