/**
 * Checks to see if a passed in item is a pojo
 *
 * @param {*} item
 * @returns {boolean} isObject - is this value a pojo
 */
function isObject(item) {
  return (typeof item === 'object' && !Array.isArray(item) && item !== null);
}

module.exports = isObject;
