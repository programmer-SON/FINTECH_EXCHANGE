'use strict';

function requiredParameter(name) {
  throw new Error(`Missing parameter "${name}"`);
}

/**
 * Supposed to be used in a default param for a function
 * Example:
 *   (string = requiredParamater('string')) => {
 *
 *   }
 *
 *   if string is not passing this will throw an Error
 * @param {string} nameOfParam
 */
module.exports = requiredParameter;
