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
  it('returns 0 for an empty list', function () {
    assert.equal(arrays.maxLevelsNested([]), 0);
  });
  it('returns 0 for a nested empty list', function () {
    assert.equal(arrays.maxLevelsNested([[[]]]), 0);
  });
  it('returns 1 for a list of numbers', function () {
    assert.equal(arrays.maxLevelsNested([10, 20, 30, 40]), 1);
  });
  it('returns 2 for a list containing a nested list and an empty list', function () {
    assert.equal(arrays.maxLevelsNested([ [5], [[]] ]), 2);
  });
  it('returns 4 for a list containing a 3-level nested list', function () {
    assert.equal(arrays.maxLevelsNested([ [10, 20], [[30, [40]]] ]), 4)
  });
});
