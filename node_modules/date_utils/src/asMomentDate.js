'use strict';

const moment = require('moment')
  ;

module.exports = (dateToParse) => {
  if (dateToParse instanceof moment) {
    return dateToParse;
  } else {
    let dateObject = new Date(dateToParse);
    if (isNaN(dateObject.valueOf())) {
      // Momentjs doesnt give the ability to invalidate its object
      // For now since all we need to ask isValid? just pass back false
      return {isValid: () => false};
    }

    return moment.utc(dateObject);
  }
};
