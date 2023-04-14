const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let uniqueArr = [];
  let arrToFilter = str.split('');
  let result = '';
  for (let i = 0; i < arrToFilter.length; i++) {
    if (
      arrToFilter[i] !== arrToFilter[i + 1] &&
      arrToFilter[i] !== arrToFilter[i - 1]
    ) {
      uniqueArr.push(arrToFilter[i]);
    } else if (
      arrToFilter[i] == arrToFilter[i + 1] &&
      arrToFilter[i] !== arrToFilter[i - 1]
    ) {
      let arr = [];
      arr.push(arrToFilter[i], arrToFilter[i + 1]);
      uniqueArr.push(arr);
    }
  }
  uniqueArr.forEach((el, index) => {
    if (!el) {
      uniqueArr.splice(index, 1);
    }
  });
  uniqueArr.forEach((el) => {
    if (Array.isArray(el)) {
      result += el.length + el[0];
    } else {
      result += el;
    }
  });
  return result;
}

module.exports = {
  encodeLine
};
