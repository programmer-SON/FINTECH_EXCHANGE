'use strict';

const chai          = require('chai')
  , expect        = chai.expect
  , isString = require('../isString')
  ;

describe('isStringSpec', function() {
  describe('should operate correctly', function() {
    var things = [
      {input: 'OMG', output: true}
      , {input: undefined, output: false}
      , {input: null, output: false}
      , {input: function() { var x = 0;}, output: false}
      , {input: [], output: false}
      , {input: new Array, output: false}
      , {input: 'abc123', output: true}
      , {input: `${1}abc123`, output: true}
      , {input: {id: '1'}, output: false}
      , {input: Object.create(Object.prototype), output: false}
    ];

    things.forEach(function(thing) {
      it(`should correctly identify a string`, function() {
        expect(isString(thing.input)).to.equal(thing.output);
      });
    });
  });
});
