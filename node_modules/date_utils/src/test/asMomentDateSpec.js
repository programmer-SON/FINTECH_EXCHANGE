'use strict';

const chai       = require('chai')
  , expect       = chai.expect
  , moment       = require('moment')
  , asMomentDate = require('../asMomentDate')
  ;

describe('asMomentDateSpec', function() {
  describe('should operate correctly', function() {
    var things = [
      {input: moment()}
      , {input: '2012-01-01', output: '2012-01-01'}
      , {input: '2012-01-01T00:00:00.000Z', output: '2012-01-01'}
      , {input: new Date(2012, 0, 1), output: '2012-01-01'}
      , {input: new Date(), output: false}
      , {input: 'Sun Jan 01 2012 14:29:09 GMT-0500 (CDT)', output: '2012-01-01'}
    ];

    things.forEach(function(thing) {
      it(`should correctly convert from ${thing.input} to moment`, function() {
        let parsedDate = asMomentDate(thing.input);
        expect(parsedDate instanceof moment).to.equal(true);
        expect(parsedDate.isValid()).to.equal(true);
        if (typeof thing.output === 'string') {
          expect(parsedDate.format('YYYY-MM-DD')).to.equal(thing.output);
        }
      });
    });
  });
  describe('should create a non-valid moment object', function() {
    var things = [
      {input: 'not-a-date'}
    ];

    things.forEach(function(thing) {
      it(`should throw ${thing.input}`, function() {
        expect(asMomentDate(thing.input).isValid()).equal(false);
      });
    });
  });
});
