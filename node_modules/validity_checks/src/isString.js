/**
 * Checks to see if a passed in item is of type string
 *
 * @param {*} item
 * @returns {boolean} isString - is this value a string
 */
function isString(item) {
  return (item !== null && typeof item === 'string');
}

module.exports = isString;
