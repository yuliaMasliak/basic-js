const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.length;
  },
  addLink(value) {},
  removeLink(position) {},
  reverseChain() {},
  finishChain() {}
};

module.exports = {
  chainMaker
};
