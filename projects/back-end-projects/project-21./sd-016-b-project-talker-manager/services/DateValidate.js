const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

const testDay = (day, month) => {
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return day > 0 && day <= monthLength[month - 1];
};

const testMonth = (month) => (month < 0 || month > 12);

const testYear = (year) => (year < 1000 || year > 3000);

const dateValidate = (date) => {
  //
  const dateParts = date.split('/');

  const day = testDay(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10));
  const month = testMonth(parseInt(dateParts[1], 10));
  const year = testYear(parseInt(dateParts[2], 10));

  if (!datePattern.test(date) && !day && !month && !year) {
    return {
      valid: false,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
  }

  return { valid: true, message: 'A data é válida' };
};

module.exports = { dateValidate };

// NOTE - Ideia do teste de data removida do link: https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript