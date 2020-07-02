import React from 'react';
import { buildMonths } from '../../generator';

function MonthYearPicker(props) {
  const monthChunks = buildMonths(3);
  return (
    <table>
      <tbody>
        {monthChunks.map((chunk, i) => (
          <tr key={i}>
            {chunk.map((month, j) => (
              <td key={j}>{month.name}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MonthYearPicker;
