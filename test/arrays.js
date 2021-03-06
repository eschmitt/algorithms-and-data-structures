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
  
  // makeTasks :: (err -> IO) -> Int -> [( (a -> b) -> IO )]
  function makeTasks(done) {
    var taskParams = [
          [1, 300]
        , [2, 200]
        , [3, 100]
        , [4, 500]
        , [5, 100]
        ]
      ;

    // Task functions are not really async, but work for testing purposes
    // generateTask :: [Int, Int] -> ( (a -> b) -> IO )
    function generateTask(ps) {
      return function (f) {
        setTimeout(function () { f(ps[0]); }, ps[1], done.fail);
      };
    }

    return taskParams.map(generateTask);
  }

  it('exists as a function', function () {
    assert.isFunction(asyncMap);
  });

  it('takes 2 inputs', function () {
    assert.lengthOf(asyncMap, 2);
  });

  it('passes completed tasks to its callback', function (done) {
    var tasks = makeTasks(done);
    var test = function (xs) {
      assert.deepEqual(xs, [1, 2, 3, 4, 5]);
      done();
    }

    asyncMap(test, tasks);
  });

  it('passes completed tasks to its callback in the correct order', function (done) {
    var tasks = makeTasks(done).reverse();
    var test = function (xs) {
      assert.deepEqual(xs, [5, 4, 3, 2, 1]);
      done();
    }

    asyncMap(test, tasks);
  });
});
