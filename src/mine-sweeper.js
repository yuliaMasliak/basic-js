const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  var adjacents = ([i, j]) => [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1]
  ];
  var hintsMatrix = matrix.map((r) => r.map((_) => 0));

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        var myAd = adjacents([i, j]);
        for (var k = 0; k < 8; k++) {
          if (
            myAd[k][0] >= 0 &&
            myAd[k][1] >= 0 &&
            myAd[k][0] < matrix.length &&
            myAd[k][1] < matrix[i].length
          ) {
            hintsMatrix[myAd[k][0]][myAd[k][1]]++;
          }
        }
      }
    }
  }

  return hintsMatrix;
}

module.exports = {
  minesweeper
};
