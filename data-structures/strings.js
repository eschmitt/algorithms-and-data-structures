var _ = require('ramda');

// permute :: String -> {String: Boolean} -> String -> [String]
//var permute = _.curry(function (combination, permutations, string) {
  // callPermute :: String -> ({String: Bool} -> Char -> Int -> String) -> IO
  /*
  var callPermute = function (combination) {
    return function (acc, item, i, s) {
      return permute( _.concat(combination, item)
                    , acc
                    , _.concat(_.slice(0, i, s), _.slice(i + Infinity, s))
                    );
    };
  };
  var storeCombination = function () { 
    return permutations[combination] = true;
  };
  */
  // should be an ifElse, incorporating compose below
  //_.when(_.not(string.length), storeCombination);

  /*
  return _.compose( _.keys
                  , _.addIndex(_.reduce(callPermute(''), {}))
                  ) (string.split(''));
});
*/

// permute :: String -> {String: Bool} -> String -> [String]
function permute(combination, permutations, s) {
  if (!s.length) {
    return permutations[combination] = true;
  }

  for (var i = 0; i < s.length; i++) {
    permute( combination.concat(s[i])
           , permutations
           , (s.slice(0, i) + s.slice(i+1))
           );
  }
  return Object.keys(permutations);
}

// getPermutations :: String -> [String]
//var getPermutations = permute('', {});
var getPermutations = function (string) { 
  return permute('', {}, string);
};

// reverse :: String -> String
function reverse(s) {
  var reversed = ''
    , i = s.length - 1
    ;
  for(i; i>= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

// hasUniqueChars :: String -> Bool
function hasUniqueChars(s) {
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

// isAnagram :: String -> String -> Bool
function isAnagram(s1, s2) {
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

// hasBalancedBrackets :: String -> Bool
function hasBalancedBrackets(s) {
  var openingBrackets = []; 
  var chr;
  var closingBracket = /[\)\]\}]/;
  var pairs = {
    '(': ')'
  , '{': '}'
  , '[': ']'
  };

  for (var i = 0; i < s.length; i++) {
    chr = s[i];
    if (pairs[chr]) {
      openingBrackets.push(chr); 
    }
    if (chr.match(closingBracket)) { 
      if (pairs[openingBrackets.pop()] !== chr) {
        return false;
      }
    }
  }

  return openingBrackets.length ? false : true;
}

module.exports = {
  getPermutations: getPermutations
, reverse: reverse
, hasUniqueChars: hasUniqueChars
, isAnagram: isAnagram
, hasBalancedBrackets: hasBalancedBrackets
};
