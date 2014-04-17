var expect = require('chai').expect
  , strings = require('../data-structures/strings.js')
  ;

describe('getPermutations', function() {
  it('returns all permutations for a given string', function() {
    expect(strings.getPermutations('a')).to.eql(['a']);
    expect(strings.getPermutations('ab')).to.include.members(['ab', 'ba']);
    expect(strings.getPermutations('abc')).to.include.members(['cab', 'acb', 'abc', 'cba', 'bca', 'bac']);
  });
});

describe('insertIntoEveryPosition', function () {
  it('inserts character into every position of string, returning a list of all permutations', function () {
    expect(strings.insertIntoEveryPosition('c', 'ab')).to.include.members(['cab', 'acb', 'abc'])
  });
});
