import React from 'react';
import theme from './Header.scss';

function Header(props) {
  return (
    <div className={theme.container}>
      {props.left && <div className={theme.left}>{props.left}</div>}
      {props.middle && <div className={theme.middle}>{props.middle}</div>}
      {props.right && <div className={theme.right}>{props.right}</div>}
    </div>
  );
}

export default Header;
