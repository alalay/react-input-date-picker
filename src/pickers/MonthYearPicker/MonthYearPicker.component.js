import React from 'react';
import PropTypes from 'prop-types';
import { buildMonths } from '../../generator';

function MonthYearPicker(props) {
  const monthChunks = buildMonths(3);
  function onSelectMonth(monthIndex) {
    props.onSelectMonth(monthIndex);
  }
  return (
    <table>
      <tbody>
        {monthChunks.map((chunk, i) => (
          <tr key={i}>
            {chunk.map((month, j) => (
              <td key={j}>
                <button
                  className='btn btn-tertiary'
                  onClick={() => onSelectMonth(month.index)}
                >
                  {month.name}
                </button>
              </td>
            ))}
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
