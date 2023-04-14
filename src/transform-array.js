const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  console.log(array);
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let arr = [];
  console.log(array);
  array.forEach((element, i) => {
    if (element == discardNext) {
      array.splice(i + 1, 1);
      console.log(array);
    } else if (element == discardPrev) {
      array.splice(i - 1, 1);
    } else if (element == doubleNext) {
      arr.push(array[i + 1]);
      arr.push(array[i + 1]);
    } else if (array[i - 2] == doublePrev) {
      if (array[i - 2] == doubleNext) {
        arr.push(array[i - 1]);
      } else {
        arr.push(array[i - 1]);
      }
      arr.push(array[i - 1]);
    } else {
      arr.push(element);
    }
  });
  let result = arr.filter((el) => !isNaN(el));
  return result;
}

module.exports = {
  transform
};
