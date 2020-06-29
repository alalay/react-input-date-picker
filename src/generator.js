import setDay from 'date-fns/setDay';
import format from 'date-fns/format';

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
