/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, el, indexEl) => {
    el.forEach((item, indexItem) => {
      if (item !== 0) {
        if (!matrix[indexEl - 1]) {
          acc += item // eslint-disable-line
        } else if (matrix[indexEl - 1][indexItem] !== 0) {
          acc += item // eslint-disable-line
        }
      }
    })
    return acc
  }, 0)
}

module.exports = getMatrixElementsSum
