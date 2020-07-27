import format from 'date-fns/format';
import getDate from 'date-fns/getDate';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import setDate from 'date-fns/setDate';

import getErrorMessage from '../shared/error-messages';

const INTERNAL_INVALID_DATE = new Date('INTERNAL_INVALID_DATE');

export function DatePickerException(code, message) {
  this.message = getErrorMessage(message);
  this.code = code;
}

function extractFromDate(date, options) {
  return {
    date,
    textInput: format(date, 'yyyy-MM-dd')
  };
}
/**
 * Build date regexep from date format.
 * It returns the yyyy, MM, dd parts order too.
 * @param dateFormat {string}
 * @returns {{partsOrder: array, regexp: RegExp}}
 */
function getDateRegexp(dateFormat) {
  const partsOrder = dateFormat.split(/[^A-Za-z]/);
  const dateFormatAsRegexp = dateFormat
    .replace(/[A-Za-z]{4}/g, '([0-9]{4})')
    .replace(/[A-Za-z]{2}/g, '([0-9]{2})');
  return {
    partsOrder,
    regexp: new RegExp(`^\\s*${dateFormatAsRegexp}\\s*$`)
  };
}

/**
 * Convert string in dateFormat to date
 */
function strToDate(strToParse, dateFormat) {
  const dateErrors = [];
  const { partsOrder, regexp } = getDateRegexp(dateFormat);
  const dateMatches = strToParse.match(regexp);
  if (!dateMatches) {
    dateErrors.push(
      new DatePickerException('INVALID_DATE_FORMAT', 'INVALID_DATE_FORMAT')
    );
    throw dateErrors;
  }

  const yearIndex = partsOrder.indexOf('yyyy');
  const monthIndex = partsOrder.indexOf('MM');
  const dayIndex = partsOrder.indexOf('dd');

  const monthString = dateMatches[monthIndex + 1];
  const month = parseInt(monthString, 10);
  if (month === 0 || month > 12) {
    dateErrors.push(
      new DatePickerException('INVALID_MONTH', 'INVALID_MONTH_NUMBER')
    );
  }

  const dayString = dateMatches[dayIndex + 1];
  const day = parseInt(dayString, 10);
  if (day === 0) {
    dateErrors.push(
      new DatePickerException('INVALID_DAY_NUMBER', 'INVALID_DAY_NUMBER')
    );
  }

  const yearString = dateMatches[yearIndex + 1];
  const year = parseInt(yearString, 10);
  const monthDate = new Date(year, month - 1);
  const lastDateOfMonth = lastDayOfMonth(monthDate);
  if (day > getDate(lastDateOfMonth)) {
    dateErrors.push(
      new DatePickerException('INVALID_DAY_OF_MONTH', 'INVALID_DAY_OF_MONTH')
    );
  }
  if (dateErrors.length > 0) {
    throw dateErrors;
  }
  return setDate(monthDate, day);
}

function extractPartsFromTextInput(textInput, options) {
  if (textInput === '') {
    return {
      date: undefined,
      textInput,
      errors: []
    };
  }

  let date;
  let errors = [];

  try {
    date = strToDate(textInput, options.dateFormat);
  } catch (error) {
    date = INTERNAL_INVALID_DATE;
    errors = errors.concat(error);
  }

  return {
    date,
    textInput,
    errors,
    errorMessage: errors[0] ? errors[0].message : null
  };
}

function extractDate(value, options) {
  if (typeof value === 'string') {
    return extractPartsFromTextInput(value, options);
  }
  return {
    date: undefined,
    textInput: '',
    errors: []
  };
}

export { extractFromDate, extractDate };
