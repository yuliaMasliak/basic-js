const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
const letters = 'ABCDEF';
const everyTrue = (currentValue) => currentValue == true;
function isMAC48Address(adress) {
  let parts = adress.split('-');
  let result = false;
  let array = [];
  parts.forEach((part) => {
    if (part.length == 2) {
      let arr = [];
      for (let i = 0; i < part.length; i++) {
        if (letters.includes(part[i]) || part[i] >= 0 || part[i] <= 9) {
          arr.push(true);
        } else {
          arr.push(false);
        }
      }

      if (arr.every(everyTrue)) {
        array.push(true);
      } else {
        array.push(false);
      }
    }
  });

  if (parts.length == 6 && array.every(everyTrue)) {
    result = true;
  }
  return result;
}
module.exports = {
  isMAC48Address
};
