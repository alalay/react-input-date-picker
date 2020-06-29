import React from 'react';

import theme from './Action.scss';

function Action(props) {
  return (
    <button type='button' className={theme['btn-tertiary']}>
      {props.label}
    </button>
  );
}

export default Action;
