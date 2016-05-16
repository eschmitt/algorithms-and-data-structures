var _ = require('ramda')

//+ getPermutations :: String -> [String]
  , getPermutations = function (string) {
      function permute(s, combination, permutations) {
        if (!s.length) {
          //return permutations.push(combination);
          return permutations[combination] = true;
        }

        for (var i = 0; i < s.length; i++) {
          permute( (s.slice(0, i) + s.slice(i+1))
                 , combination.concat(s[i])
                 , permutations
                 );
        }
        return Object.keys(permutations);
      }

      return permute(string, '', {});
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

//+ isAnagram :: String -> String -> Bool
  , isAnagram = function (s1, s2) {
      var i = 0
        //sortChars :: String -> String
        , sortChars = function (s) {
            return s.toLowerCase().split('').sort().join('');
          }
        ;
      if (s1.length !== s2.length){ return false; }
      if (sortChars(s1) !== sortChars(s2)) { return false; }
      return true;
    }
  ;

module.exports = {
  getPermutations: getPermutations
, reverse: reverse
, hasUniqueChars: hasUniqueChars
, isAnagram: isAnagram
};
