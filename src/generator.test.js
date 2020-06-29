import { buildDayNames } from './generator';

describe('buildDayNames', () => {
  it('should generate day names start from Monday', () => {
    const dayNames = buildDayNames();
    expect(dayNames).toEqual([
      { abbr: 'Mo', full: 'Monday' },
      { abbr: 'Tu', full: 'Tuesday' },
      { abbr: 'We', full: 'Wednesday' },
      { abbr: 'Th', full: 'Thursday' },
      { abbr: 'Fr', full: 'Friday' },
      { abbr: 'Sa', full: 'Saturday' },
      { abbr: 'Su', full: 'Sunday' }
    ]);
  });
});
