const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if (options.hasOwnProperty('separator')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += options.separator + str;
      if (options.hasOwnProperty('additionSeparator')) {
        let addition = '';
        for (let x = 0; x < options.additionRepeatTimes; x++) {
          if (options.additionSeparator) {
            addition += options.additionSeparator + options.addition;
          } else {
            addition += '|' + options.addition;
          }
        }
        let add = addition.replace(options.additionSeparator, '');
        result += add;
      } else {
        result += '+';
      }
    }
    result = result.replace(options.separator, '');
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str;
      let addition = '';
      for (let x = 0; x < options.additionRepeatTimes; x++) {
        if (options.additionSeparator) {
          addition += options.additionSeparator + options.addition;
        } else {
          addition += '|' + options.addition;
        }
      }
      let add = addition.replace(options.additionSeparator, '');
      add = addition.replace('|', '');
      result += add + '+';
      // result = result.slice(0, result.length - 1);
    }
    result = result.slice(0, result.length - 1);
  }
  return result;
}

module.exports = {
  repeater
};
