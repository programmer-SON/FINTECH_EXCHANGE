/**
 * Checks to see if a passed in item is an empty
 *
 * http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
 *
 * @param {*} item
 * @returns {boolean} isEmptyObject - is this value a pojo
 */
function isEmptyObject(item) {
  if (item === undefined || item === null) {
    return false;
  }

  return (Object.keys(item).length === 0 && JSON.stringify(item) === JSON.stringify({}));
}

module.exports = isEmptyObject;
