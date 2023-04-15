const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let arr = str.split('');
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    let arrCopy = [...arr];
    console.log(arrCopy);
    let total = '';
    arrCopy.splice(index, 1);

    arrCopy.forEach((elem) => {
      total += elem;
    });
    if (+total > max) {
      max = total;
    }
  }

  return +max;
}

module.exports = {
  deleteDigit
};
