'use strict';

const chai = require('chai')
  ,	expect = chai.expect
  , isFunction = require('../isFunction')
  ;

describe('isFunctionSpec', function() {
  describe('Nominal operation', function() {
    it('should correct identify a function', function() {
      expect(isFunction(function() { })).to.equal(true);
    });

    it('should correct identify this isnt a function', function() {
      expect(isFunction()).to.equal(false);
      expect(isFunction('function')).to.equal(false);
      expect(isFunction(1)).to.equal(false);
      expect(isFunction({})).to.equal(false);
    });
  });
});
