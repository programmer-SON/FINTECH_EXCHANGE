'use strict';

const validityChecks = require('validity_checks')
  , moment = require('moment')
  , rp = validityChecks.requiredParameter
  ;

module.exports = (mDtf = rp('dateToFormat(moment)'), desiredFormat = rp('desiredFormat')) => {
  if (!(mDtf instanceof moment)) {
    throw new Error('First param must be a momentized date object');
  }

  return mDtf.format(desiredFormat);
};
