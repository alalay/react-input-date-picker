import React from 'react';
import { buildDayNames, buildWeeks } from '../../generator';

function DatePicker(props) {
  const dayNames = buildDayNames();
  const weeks = buildWeeks();
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
