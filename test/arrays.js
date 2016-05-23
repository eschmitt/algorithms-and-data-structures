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
  var maxLevelsNested = arrays.maxLevelsNested;

  it('exists as a Function', function () {
    assert.isFunction(maxLevelsNested);
  });
  it('returns 0 for an empty list', function () {
    assert.equal(maxLevelsNested([]), 0);
  });
  it('returns 0 for a nested empty list', function () {
    assert.equal(maxLevelsNested([[[]]]), 0);
  });
  it('returns 1 for a list of numbers', function () {
    assert.equal(maxLevelsNested([10, 20, 30, 40]), 1);
  });
  it('returns 2 for a list containing a nested list and an empty list', function () {
    assert.equal(maxLevelsNested([ [5], [[]] ]), 2);
  });
  it('returns 4 for a list containing a 3-level nested list', function () {
    assert.equal(maxLevelsNested([ [10, 20], [[30, [40]]] ]), 4);
  });
});

describe('asyncMap', function () {
  var asyncMap = arrays.asyncMap;

  it('exists as a function', function () {
    assert.isFunction(asyncMap);
  });

  it('takes 2 inputs', function () {
    assert.lengthOf(asyncMap, 2);
  });

  it('passes completed tasks to its callback', function (done) {
    // These functions are not really async, but work for testing purposes
    function wait2For2(f) {
      setTimeout(function () {
        f(2);
      }, 200, done.fail);
    }
    
    function wait3For1(f) {
      setTimeout(function () {
        f(1);
      }, 300, done.fail);
    }

    asyncMap([wait2For2, wait3For1], function (xs) {
      assert.deepEqual(xs, [2, 1]);
      assert.lengthOf(xs, 2);
      done();
    })
  });
});
