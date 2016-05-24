var _ = require('ramda');

//+ getValuesInRange :: [a] -> [a] -> [a]
var getValuesInRange = function (list, range) {
      var start = 0
        , stop = list.length - 1
        ;
      while (stop >= start) {
        if (true) {}
      }
      return null;
    };

//  maxLevelsNested :: [a] -> Int
var maxLevelsNested = function (list) {
  var maxLevels = 0
    , recurseNestedLevels = function (xs, level) {
        if (!Array.isArray(xs)) { 
          return level;
        }

        if (!xs.length) {
          level = 0
          return level;
        }
        
        xs.forEach(function (item) {
          var currentLevel = recurseNestedLevels(item, level + 1);
          if (currentLevel > maxLevels) { maxLevels = currentLevel; }
        });
      }
    ;
    // [[[]]], 0
    //
    // recurse([[]], 1) => undefined
    // maxLevels = 0
    // 
    // recurse([], 2) => 0
    // maxLevels = 0

  recurseNestedLevels(list, 0);

  return maxLevels;
};

//  Task :: ( (a -> b) -> IO )
//  asyncMap :: [Task] -> (a -> IO) -> IO
var asyncMap = function (tasks, f) {
  // makePromise :: (a -> b) -> Promise
  var makePromise = function (task) {
    return new Promise(function (resolve, reject) {
      task(resolve);
    });
  }

  Promise.all(tasks.map(makePromise)).then(f);
};

module.exports = {
  getValuesInRange: getValuesInRange
, maxLevelsNested: maxLevelsNested
, asyncMap: asyncMap
}
