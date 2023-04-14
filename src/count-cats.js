const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix) {
    return false;
  }
  if (!Array.isArray(matrix)) {
    return false;
  }
  let total = 0;
  matrix.forEach((arr) => {
    arr.forEach((cat) => {
      if (cat == '^^') {
        total += 1;
      }
    });
  });
  return total;
}

module.exports = {
  countCats
};
