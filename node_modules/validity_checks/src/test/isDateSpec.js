'use strict';

const chai          = require('chai')
  , expect        = chai.expect
  , isDate = require('../isDate')
  ;

describe('isDateSpec', function() {
  let things = [
    {input: 'OMG', output: false}
    , {input: undefined, output: false}
    , {input: null, output: false}
    , {input: function() { var x = 0;}, output: false}
    , {input: [], output: false}
    , {input: new Array, output: false}
    , {input: 'abc123', output: false}
    , {input: Object.create(Object.prototype), output: false}
    , {input: Object.create(null), output: false}
    , {input: new Date(2017, 0, 1), output: true}
    , {input: new Date(1999, 0, 1), output: true}
    , {input: new Date(), output: true}
  ];

  things.forEach(function(thing) {
    it(`should correctly identify a Date`, function() {
      expect(isDate(thing.input)).to.equal(thing.output);
    });
  });
});
