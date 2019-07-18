/**
 * Returns false if the cb isnt passed or isnt a function
 *
 * @param {Function} fnc
 */
module.exports = function checkCallback(fnc) {
  return !(!fnc || typeof fnc !== 'function');
};
