import React from 'react';
import keycode from 'keycode';

function focusOn(element) {
  if (element) {
    element.focus();
  }
}
/**
 * Get the day corresponding to offset
 * Negative offset: we count from the end of month. offset = -1, previous month has 30 days, 30 - 1 = 29, 29th day
 * Positive offset: we count from the beginning of month. offset = 5, return 5th of current month
 * Zero offset: offset = 0, will return the 1st day of next month
 */
function getDay(calendarRef, offset) {
  const allItems = getAllItems(calendarRef);
  const target = offset < 0 ? allItems.length + offset : offset;
  return allItems[target];
}

/**
 * Select all items in current calendar
 */
function getAllItems(calendarRef) {
  return calendarRef.querySelectorAll('td > button[data-value]');
}

function focusOnDay(
  calendarRef,
  indexToFocus,
  { goToPreviousMonth, goToNextMonth }
) {
  const allItems = getAllItems(calendarRef);
  if (indexToFocus < 0) {
    goToPreviousMonth();
    setTimeout(() => focusOn(getDay(calendarRef, indexToFocus)));
  } else if (indexToFocus > allItems.length - 1) {
    goToNextMonth();
    setTimeout(() =>
      focusOn(getDay(calendarRef, indexToFocus - allItems.length))
    );
  } else {
    focusOn(allItems[indexToFocus]);
  }
}

export function withCalendarGesture(WrappedComponent) {
  return function CalenarGesture(props) {
    function onKeyDown(event, calendarRef, dayIndex) {
      switch (event.keyCode) {
        case keycode.codes.left:
          event.stopPropagation();
          focusOnDay(calendarRef, dayIndex - 1, props);
          break;
        case keycode.codes.right:
          event.stopPropagation();
          focusOnDay(calendarRef, dayIndex + 1, props);
          break;
        case keycode.codes.up:
          event.stopPropagation();
          focusOnDay(calendarRef, dayIndex - 7, props);
          break;
        case keycode.codes.down:
          event.stopPropagation();
          focusOnDay(calendarRef, dayIndex + 7, props);
          break;
        default:
          break;
      }
    }
    return (
      <div>
        <WrappedComponent {...props} onKeyDown={onKeyDown} />
      </div>
    );
  };
}
