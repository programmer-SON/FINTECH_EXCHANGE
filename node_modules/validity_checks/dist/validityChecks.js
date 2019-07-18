(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.__validityChecks = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  checkCallbackStrict: require('./src/checkCallbackStrict'),
  requiredParameter: require('./src/requiredParameter'),
  isFunction: require('./src/isFunction'),
  isObject: require('./src/isObject'),
  isEmptyObject: require('./src/isEmptyObject'),
  isString: require('./src/isString'),
  isDate: require('./src/isDate')
};

},{"./src/checkCallbackStrict":2,"./src/isDate":3,"./src/isEmptyObject":4,"./src/isFunction":5,"./src/isObject":6,"./src/isString":7,"./src/requiredParameter":8}],2:[function(require,module,exports){
'use strict';

var isFunction = require('./isFunction');

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

},{"./isFunction":5}],3:[function(require,module,exports){
'use strict';

/**
 * Returns if the param passed is an instanceof the Date object
 *
 * @param {Date} date
 */

module.exports = function isDate(date) {
  return date instanceof Date;
};

},{}],4:[function(require,module,exports){
"use strict";

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

  return Object.keys(item).length === 0 && JSON.stringify(item) === JSON.stringify({});
}

module.exports = isEmptyObject;

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Returns false if the cb isnt passed or isnt a function
 *
 * @param {Function} fnc
 */
module.exports = function checkCallback(fnc) {
  return !(!fnc || typeof fnc !== 'function');
};

},{}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Checks to see if a passed in item is a pojo
 *
 * @param {*} item
 * @returns {boolean} isObject - is this value a pojo
 */
function isObject(item) {
  return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item) && item !== null;
}

module.exports = isObject;

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Checks to see if a passed in item is of type string
 *
 * @param {*} item
 * @returns {boolean} isString - is this value a string
 */
function isString(item) {
  return item !== null && typeof item === 'string';
}

module.exports = isString;

},{}],8:[function(require,module,exports){
'use strict';

function requiredParameter(name) {
  throw new Error('Missing parameter "' + name + '"');
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

},{}]},{},[1])(1)
});