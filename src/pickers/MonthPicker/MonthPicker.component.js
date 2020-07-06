import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { buildMonths } from '../../generator';

import theme from './MonthPicker.scss';

function MonthYearPicker(props) {
  const monthChunks = buildMonths(3);
  function onSelectMonth(monthIndex) {
    props.onSelectMonth(monthIndex);
  }
  return (
    <table className={theme.container}>
      <tbody>
        {monthChunks.map((chunk, i) => (
          <tr className={theme['calendar-row']} key={i}>
            {chunk.map((month, j) => {
              const className = classNames(
                theme['calendar-month'],
                'btn',
                'btn-tertiary'
              );
              return (
                <td className={theme['calendar-col']} key={j}>
                  <button
                    className={className}
                    onClick={() => onSelectMonth(month.index)}
                  >
                    {month.name}
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MonthYearPicker.propTypes = {
  onSelectMonth: PropTypes.func.isRequired
};

export default MonthYearPicker;
