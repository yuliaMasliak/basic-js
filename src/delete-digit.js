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
  let arrCopy = arr;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    const initialValue = 0;
    let result = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    console.log(result);
    if (result > max) {
      max = result;
    }
    arr.length = 0;
    arrCopy.forEach((el) => {
      arr.push(el);
    });
  }
  let res = max.slice(1, max.length);
  return +res;
}

module.exports = {
  deleteDigit
};
