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

function createArr(str, result) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result.push(str.slice(0, i + 1))
      return createArr(str.slice(i + 1), result)
    }
  }
  return result
}

function encodeLine(str) {
  const result = createArr(str, [])
  return result.reduce((acc, el) => el.length === 1 ? acc + el : acc + el.length + el[0], '') // eslint-disable-line
}

module.exports = encodeLine
