var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      return "FAILED";
    } else {
      return "PASSED";
    };
  },
  isEqual: function(valueToCheck, expectedValue) {
    if (valueToCheck !== expectedValue) {
      return "FAILED";
    } else {
      return "PASSED";
    }
  },
  isNotEqual: function(valueToCheck, expectedValue) {
    if (valueToCheck === expectedValue) {
      return "FAILED";
    } else {
      return "PASSED";
    };
  }
};

var it = {
  should: function(testDescription, testFunction) {
    results.add(testDescription, testFunction())
  }
};
