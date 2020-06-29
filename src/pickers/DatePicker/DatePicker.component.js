import React from 'react';
import { buildDayNames } from '../../generator';

function DatePicker(props) {
  const dayNames = buildDayNames();
  return (
    <table>
      <thead>
        <tr>
          {dayNames.map((day, idx) => (
            <th key={idx}>{day.abbr}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DatePicker;
