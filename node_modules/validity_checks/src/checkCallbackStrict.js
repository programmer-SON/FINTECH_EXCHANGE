'use strict';

const isFunction = require('./isFunction')
  ;

/**
 * Throws if the cb isnt passed or isnt a function
 *
 * @param {Function} cb
 */
module.exports = function checkCallback(cb) {
  if (!isFunction(cb)) {
    throw new Error('Please provide a callback fnc to this get (its async)');
  }
};
