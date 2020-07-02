import { buildDayNames, buildWeeks, buildMonths } from './generator';

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

describe('buildWeeks', () => {
  it('should generate weeks data', () => {
    const weeks = buildWeeks(2020, 5, 1);
    expect(weeks).toEqual([
      [
        new Date(2020, 5, 1),
        new Date(2020, 5, 2),
        new Date(2020, 5, 3),
        new Date(2020, 5, 4),
        new Date(2020, 5, 5),
        new Date(2020, 5, 6),
        new Date(2020, 5, 7)
      ],
      [
        new Date(2020, 5, 8),
        new Date(2020, 5, 9),
        new Date(2020, 5, 10),
        new Date(2020, 5, 11),
        new Date(2020, 5, 12),
        new Date(2020, 5, 13),
        new Date(2020, 5, 14)
      ],
      [
        new Date(2020, 5, 15),
        new Date(2020, 5, 16),
        new Date(2020, 5, 17),
        new Date(2020, 5, 18),
        new Date(2020, 5, 19),
        new Date(2020, 5, 20),
        new Date(2020, 5, 21)
      ],
      [
        new Date(2020, 5, 22),
        new Date(2020, 5, 23),
        new Date(2020, 5, 24),
        new Date(2020, 5, 25),
        new Date(2020, 5, 26),
        new Date(2020, 5, 27),
        new Date(2020, 5, 28)
      ],
      [
        new Date(2020, 5, 29),
        new Date(2020, 5, 30),
        new Date(2020, 6, 1),
        new Date(2020, 6, 2),
        new Date(2020, 6, 3),
        new Date(2020, 6, 4),
        new Date(2020, 6, 5)
      ],
      [
        new Date(2020, 6, 6),
        new Date(2020, 6, 7),
        new Date(2020, 6, 8),
        new Date(2020, 6, 9),
        new Date(2020, 6, 10),
        new Date(2020, 6, 11),
        new Date(2020, 6, 12)
      ]
    ]);
  });
});
describe('buildMonths', () => {
  it('should generate months', () => {
    // when
    const result = buildMonths(3);

    // then
    expect(result).toEqual([
      [
        { index: 0, name: 'January' },
        { index: 1, name: 'February' },
        { index: 2, name: 'March' }
      ],
      [
        { index: 3, name: 'April' },
        { index: 4, name: 'May' },
        { index: 5, name: 'June' }
      ],
      [
        { index: 6, name: 'July' },
        { index: 7, name: 'August' },
        { index: 8, name: 'September' }
      ],
      [
        { index: 9, name: 'October' },
        { index: 10, name: 'November' },
        { index: 11, name: 'December' }
      ]
    ]);
  });
});
