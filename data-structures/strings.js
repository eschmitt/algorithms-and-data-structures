var _ = require('preludejs');

//+ insert :: String -> Char -> Char -> Int -> String
var insert = function (s, c, index_char, i) {
      if (i > 0) { return s.slice(0, i) + c + s.slice(i, s.length); }
      else { return c + s; }
    }.autoCurry()

//+ insertIntoEveryPosition :: Char -> String -> String
  , insertIntoEveryPosition = function (c, s) {
      return _.concat(_.map(insert(s, c), s), [s + c]);
    }.autoCurry()

//+ merge :: Char -> [String] -> [String]
  , merge = function (c, ps) {
      return _.flatten(_.map(insertIntoEveryPosition(c), ps));
    }

//+ getPermutations :: String -> [String]
  , getPermutations = function (s) {
      var permutations = [];
      if (s.length === 1) { permutations.push(s); }
      else if (s.length > 1) {
        permutations = merge(_.last(s), getPermutations(_.take(s.length - 1, s)));
      }
      return permutations;
    }
  ;

module.exports = {
  getPermutations: getPermutations
, insertIntoEveryPosition: insertIntoEveryPosition
, insert: insert
}
