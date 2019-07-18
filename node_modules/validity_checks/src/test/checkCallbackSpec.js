const chai = require('chai')
  ,	expect = chai.expect
  , checkCallback = require('../checkCallbackStrict')
  ;

chai.use(require('chai-spies'));

describe('checkCallbackSpec', function() {
  describe('Nominal condition', function() {
    it('pass validation', function() {
      expect(function() {
        checkCallback(function() {});
      }).to.not.throw();
    });
  });

  describe('Nominal error conditions', function() {
    it('should error if no cb', function() {
      expect(function() {
        checkCallback();
      }).to.throw();
    });

    it('should error if null/undefined cb', function() {
      expect(function() {
        checkCallback(null);
      }).to.throw();

      expect(function() {
        checkCallback(undefined);
      }).to.throw();
    });
  });
});
