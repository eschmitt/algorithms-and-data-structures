var expect = require('chai').expect
  , assert = require('chai').assert
  , arrays = require('../data-structures/arrays.js')
  ;

describe('getValuesInRange', function() {
  xit('Returns a list of values that are within range', function() {
    var list = [2, 4, 6, 8, 10]
      , range = [5, 10]
      ;
    expect(getValuesInRange(list, range)).to.include.members([6, 8, 10]);
  });
});

describe('maxLevelsNested', function () {
  it('exists as a Function', function () {
    assert.isFunction(arrays.maxLevelsNested);
  });
  xit('returns the number of the deepest level that contains a non-array value', function () {
    assert.equal(arrays.maxLevelsNested([]), 0);
  });
});
