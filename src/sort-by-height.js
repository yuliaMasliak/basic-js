const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  arr.forEach((element, i) => {
    element == -1 ? indexes.push(i) : '';
  });
  let res = arr.sort((a, b) => {
    return a - b;
  });
  console.log(res);
  res.splice(0, indexes.length);
  console.log(res);
  console.log(indexes);
  indexes.forEach((el, i) => {
    res.splice(el, 0, -1);
  });
  return res;
}

module.exports = {
  sortByHeight
};
