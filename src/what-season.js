const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let month = date.getMonth();
  if (!date) {
    return false;
  }
  if (date instanceof Date) {
    if (month < 3 || month === 12) {
      return 'winter';
    }
    if (month < 6) {
      return 'spring';
    }
    if (month < 9) {
      return 'summer';
    }
    if (month < 12) {
      return 'autumn';
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
