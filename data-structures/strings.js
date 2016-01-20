var _ = require('preludejs')
  , insert = require('string-utilities').insert
  ;

//+ insertIntoEveryPosition :: Char -> String -> String
var insertIntoEveryPosition = function (c, s) {
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

//+ reverse :: String -> String
  , reverse = function (s) {
      var reversed = ''
        , i = s.length - 1
        ;
      for(i; i>= 0; i--) {
        reversed += s[i];
      }
      return reversed;
    }

//+ hasUniqueChars :: String -> Bool
  , hasUniqueChars = function (s) {
      var chars = []
        , i = 0
        ;
      if (s.length > 256) { return false; }
      for (i; i < s.length; i++) {
        var val = s.charAt(i);
        if (chars[val]) { return false; }
        chars[val] = true;
      }
      return true;
    }
  ;

module.exports = {
  getPermutations: getPermutations
, insertIntoEveryPosition: insertIntoEveryPosition
, reverse: reverse
, hasUniqueChars: hasUniqueChars
}
