/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.match(/@[\w/\W][^@]+/g)
  return result[result.length - 1].slice(1)
}

module.exports = getEmailDomain
