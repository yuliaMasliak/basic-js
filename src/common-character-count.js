const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let total = [];
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');

  if (s1Arr.length >= s2Arr.length) {
    s1Arr.forEach((el, indexS1) => {
      s2Arr.forEach((elem, indexS2) => {
        if (el === elem) {
          total.push(el);
          s2Arr.splice(indexS2, 1);
          s1Arr.splice(indexS1, 1);
        }
      });
    });
  } else {
    for (let i = 0; i < s2Arr.length; i++) {
      for (let x = 0; x < s1Arr.length; x++) {
        if (s2Arr[i] === s1Arr[x]) {
          total.push(s2Arr[i]);
          s2Arr.splice(i, 1);
          i -= 1;
          s1Arr.splice(x, 1);
        }
      }
    }
  }

  return total.length;
}
module.exports = {
  getCommonCharacterCount
};
