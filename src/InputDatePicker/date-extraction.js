import format from 'date-fns/format';

function extractFromDate(date, options) {
  return {
    date,
    textInput: format(date, 'yyyy-MM-dd')
  };
}

export { extractFromDate };
