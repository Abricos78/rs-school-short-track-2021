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
  let result = 0;
  const str = `${n}`;
  for (let i = 0; i < str.length; i++) {
    let currentN = '';
    switch (i) {
      case 0:
        currentN = str.slice(1);
        break;
      case n.length - 1:
        currentN = str.slice(0, i - 1);
        break;
      default:
        currentN = str.slice(0, i) + str.slice(i + 1);
    }

    if (result < currentN) {
      result = currentN;
    }
  }
  return +result;
}

module.exports = deleteDigit;
