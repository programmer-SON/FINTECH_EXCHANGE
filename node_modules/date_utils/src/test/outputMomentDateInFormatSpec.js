'use strict';

const chai                   = require('chai')
  , expect                   = chai.expect
  , moment                   = require('moment')
  , outputMomentDateInFormat = require('../outputMomentDateInFormat')
  ;

describe('outputMomentDateInFormatSpec', function() {
  describe('Nominal Operation', function() {
    it('should format and return a string', function() {
      let output = outputMomentDateInFormat(moment(new Date(2012, 0, 1)), 'YYYY-MM-DD');

      expect(typeof output).to.equal('string');
      expect(output).to.equal('2012-01-01');
    });
  });

  describe('Error states', function() {
    it('should only accept moment object on first param', function() {
      expect(function() { outputMomentDateInFormat('not-moment', 'nothing'); }).to.throw();
    });

    it('should error if not passed any params', function() {
      expect(function() { outputMomentDateInFormat(); }).to.throw();
    });

    it('should error if not passed 2nd param', function() {
      expect(function() { outputMomentDateInFormat('s'); }).to.throw();
    });
  });
});
