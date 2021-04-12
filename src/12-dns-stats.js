/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDomainsFromString(domain) {
  return domain.split('.').reverse();
}

function getDomainsFromStrings(domains) {
  return domains.reduce((acc, domain) => {
    const allDomainsFromString = getDomainsFromString(domain);
    allDomainsFromString.forEach((item, index) => {
      const result = allDomainsFromString.slice(0, index + 1).join('.');
      if (acc.indexOf(result) === -1) {
        acc.push(result);
      }
    });
    return acc;
  }, []);
}

function getDNSStats(domains) {
  const allDomains = getDomainsFromStrings(domains);
  return domains.reduce((acc, el) => {
    allDomains.forEach((domain) => {
      if (el.indexOf(domain.split('.').reverse().join('.')) !== -1) {
        if (acc[`.${domain}`]) {
          acc[`.${domain}`] += 1;
        } else {
          acc[`.${domain}`] = 1;
        }
      }
    });
    return acc;
  }, {});
}

module.exports = getDNSStats;
