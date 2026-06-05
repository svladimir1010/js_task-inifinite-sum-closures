'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function adder(x) {
    if (x === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
