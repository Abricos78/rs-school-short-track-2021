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

function findMines(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      if (findMines(matrix[i])) {
        return true;
      }
    }
    if (matrix[i] === true) {
      return true;
    }
  }
  return false;
}

function minesweeper(matrix) {
  if (!findMines(matrix)) {
    return matrix.map((el) => el.map(() => 0));
  }

  return matrix.map((el, indexEl) => el.map((item, indexItem) => {
    if (item) {
      item = 0 // eslint-disable-line
    } else {
      item = 0 // eslint-disable-line
      if (el[indexItem - 1]) {
        item++ // eslint-disable-line
      }
      if (matrix[indexEl - 1] && matrix[indexEl - 1][indexItem]) {
        item++ // eslint-disable-line
      }
      if (el[indexItem + 1]) {
        item++ // eslint-disable-line
      }
      if (matrix[indexEl + 1] && matrix[indexEl + 1][indexItem]) {
        item++ // eslint-disable-line
      }
    }
    return item === 0 ?  1 : item // eslint-disable-line
  }));
}

module.exports = minesweeper;
