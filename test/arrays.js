var expect = require('chai').expect
  , arrays = require('../data-structures/arrays.js')
  ;

describe('getValuesInRange', function() {
  it('Returns a list of values that are within range', function() {
    var list = [2, 4, 6, 8, 10]
      , range = [5, 10]
      ;
    expect(getValuesInRange(list, range)).to.include.members([6, 8, 10]);
  });
});
