'use strict';

const chai     = require('chai')
  , moment     = require('moment')
  , expect     = chai.expect
  , entryPoint = require('../../index')
  ;

describe('indexSpec', function() {
  describe('Error conditions', function() {
    it('should error if passed invalid date', function() {
      expect(function() {
        entryPoint('some-date-that-isnt');
      }).to.throw();
    });
  });

  describe('Nominal operation', function() {
    it('should return an object with properties', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;

      expect(typeof dates).to.equal('object');

      expect(dates.dateProvided).to.not.equal(undefined);
      expect(dates.momentDate instanceof moment).to.equal(true);
      expect(dates.asUtc instanceof moment).to.equal(true);
      expect(dates.ticks).to.not.equal(undefined);
      expect(dates.standardDateFormat).to.not.equal(undefined);
      expect(dates.dateForDisplay).to.not.equal(undefined);
      expect(dates.toDbFormat).to.not.equal(undefined);
      expect(dates.toDbFormat instanceof Date).to.equal(true);
      expect(dates.addDuration).to.not.equal(undefined);

      expect(dates.dateProvided).to.equal(TEST_DATE);
      expect(dates.standardDateFormat).to.equal('2012-01-01 00:00:00');
      expect(dates.dateForDisplay).to.equal('2012-01-01');
      expect(dates.toDbFormat).to.eql(new Date(2012, 0, 1));
      expect(typeof dates.addDuration).to.equal('function');
    });

    it('should add the duration correctly', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;

      let durationResult = dates.addDuration('+1d');

      expect(typeof durationResult).to.equal('object');
      expect(durationResult.format('YYYY-MM-DD')).to.equal('2012-01-02');
    });

    it('should add duration of +0d if nothing passed', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;

      let durationResult = dates.addDuration();

      expect(typeof durationResult).to.equal('object');
      expect(durationResult.format('YYYY-MM-DD')).to.equal('2012-01-01');
    });

    it('add duration should return exact options as regular date util call', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;

      let durationResult = dates.addDuration();

      expect(typeof durationResult).to.equal('object');

      expect(durationResult.hasOwnProperty('dateProvided')).to.equal(true);
      expect(durationResult.hasOwnProperty('format')).to.equal(true);

      expect(durationResult.format('YYYY-MM-DD')).to.equal('2012-01-01');
    });

    it('should have a convenience method for formatting', function() {
      const TEST_DATE = '2012-01-01'
        , dates = entryPoint(TEST_DATE)
        ;

      expect(dates.format).to.not.equal(undefined);
      expect(typeof dates.format).to.equal('function');

      expect(dates.format('YYYY => MM => DD')).to.equal('2012 => 01 => 01');
    });
  });
});
