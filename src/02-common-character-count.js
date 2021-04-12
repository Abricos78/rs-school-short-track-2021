/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const longerArg = s1.length >= s2.length ? s1.split('').sort() : s2.split('').sort()
  const shorterArg = s2.length <= s1.length ? s2.split('').sort() : s1.split('').sort()
  return shorterArg.reduce((acc, el) => {
    if (longerArg.includes(el)) {
      acc++ // eslint-disable-line
      longerArg[longerArg.indexOf(el)] = undefined
    }
    return acc
  }, 0)
}

module.exports = getCommonCharacterCount
