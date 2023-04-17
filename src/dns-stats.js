const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let array = domains.sort((a, b) => b.length - a.length);
  let parts = array[0].split('.');

  let result = {};
  let part1 = '.' + parts[2];
  let part2 = '.' + parts[1] + '.' + parts[2];
  let part3 = '.' + parts[0] + '.' + parts[1] + '.' + parts[2];
  result[part1] = 0;
  result[part2] = 0;
  result[part3] = 0;

  for (let index = 0; index < Object.keys(result).length; index++) {
    domains.forEach((el) => {
      let elementWithotDot = Object.keys(result)[index].replace('.', '');
      if (el.includes(elementWithotDot)) {
        result[Object.keys(result)[index]] += 1;
      }
    });
  }
  const obj = { oldKey: 'value' };
  let newPart1 = '.' + parts[2];
  let newPart2 = '.' + parts[2] + '.' + parts[1];
  let newPart3 = '.' + parts[2] + '.' + parts[1] + '.' + parts[0];

  result[newPart2] = result[part2];
  result[newPart3] = result[part3];

  delete result[part2];
  delete result[part3];
  return result;
}

module.exports = {
  getDNSStats
};
