import chunk from 'lodash/chunk';
import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import setDay from 'date-fns/setDay';
import getYear from 'date-fns/getYear';
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

/**
 * Generate sets of months, each set has the size of provided "chunkSize"
 */
export function buildMonths(chunkSize) {
  const months = new Array(12)
    .fill(0)
    .map((_, i) => i)
    .map((index) => ({
      index,
      name: format(addMonths(new Date(0), index), 'MMMM')
    }));
  return chunk(months, chunkSize);
}

export function buildYears(middle = getYear(new Date()), window = 3) {
  const start = middle - window;
  const end = middle + window;
  const years = [];
  for (let i = start; i <= end; i += 1) {
    years.push(i);
  }
  return years;
}
