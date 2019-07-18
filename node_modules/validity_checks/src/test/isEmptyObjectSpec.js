'use strict';

const chai          = require('chai')
  , expect        = chai.expect
  , isEmptyObject = require('../isEmptyObject')
  ;

describe('isEmptyObjectSpec', function() {
  describe('should operate correctly', function() {
    var things = [
      {input: 'OMG', output: false}
      , {input: undefined, output: false}
      , {input: null, output: false}
      , {input: function() { var x = 0;}, output: false}
      , {input: [], output: false}
      , {input: new Array, output: false}
      , {input: 'abc123', output: false}
      , {input: {id: '1'}, output: false}
      , {input: {}, output: true}
      , {input: Object.create(Object.prototype), output: true}
      , {input: Object.create(null), output: true}
    ];

    things.forEach(function(thing) {
      it(`should correctly identify a pojo`, function() {
        expect(isEmptyObject(thing.input)).to.equal(thing.output);
      });
    });
  });
});
