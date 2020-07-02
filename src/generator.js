import chunk from 'lodash/chunk';
import addDays from 'date-fns/addDays';
import setDay from 'date-fns/setDay';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
/**
 * Build day names of the week
 * @param {number} firstDayOfWeek: first day of the week
 */
export function buildDayNames(firstDayOfWeek = 1) {
  return new Array(7)
    .fill(0)
    .map((_, idx) => (idx + firstDayOfWeek) % 7)
    .map((dayOfWeek) => setDay(new Date(0), dayOfWeek))
    .map((day) => ({
      abbr: format(day, 'EEEEEE'),
      full: format(day, 'EEEE')
    }));
}

/**
 * Generate the set of weeks for a specific month
 */
export function buildWeeks(year, monthIndex, firstDayOfWeek = 1) {
  const firstDateOfMonth = new Date(year, monthIndex);
  const firstDateOfCalendar = startOfWeek(firstDateOfMonth, {
    weekStartsOn: firstDayOfWeek
  });

  const dates = new Array(7 * 6)
    .fill(0)
    .map((_, i) => addDays(firstDateOfCalendar, i));

  return chunk(dates, 7);
}
