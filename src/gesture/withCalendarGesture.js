import React from 'react';

export function withCalendarGesture(WrappedComponent) {
  return function CalenarGesture(props) {
    function onKeyDown() {}
    return (
      <div>
        <WrappedComponent {...props} onKeyDown={onKeyDown} />
      </div>
    );
  };
}
