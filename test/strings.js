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

// Cracking the Coding Interview: 1.1 pg 73
describe('reverse', function () {
  it('returns a string in reverse order', function () {
    expect(strings.reverse('a')).to.equal('a');
    expect(strings.reverse('ab')).to.equal('ba');
    expect(strings.reverse('abc')).to.equal('cba');
  });
});

// Cracking the Coding Interview: 1.1 pg 73
describe('hasUniqueChars', function () {
  it('returns true if all characters in string are unique, otherwise, it returns false.', function () {
    expect(strings.hasUniqueChars('a')).to.equal(true);
    expect(strings.hasUniqueChars('aa')).to.equal(false);
    expect(strings.hasUniqueChars('abc12~')).to.equal(true);
  });
});

describe('isAnagram', function () {
  it('returns true if the second string is an anagram of the first, otherwise it returns false.', function () {
    expect(strings.isAnagram('cinema', 'iceman')).to.equal(true);
    expect(strings.isAnagram('Cinema', 'Iceman')).to.equal(true);
    expect(strings.isAnagram('cinema', 'foo')).to.equal(false);
    expect(strings.isAnagram('cinemafoo', 'iceman')).to.equal(false);
    expect(strings.isAnagram('cinema', 'icemai')).to.equal(false);
  });
});

// Cracking the Coding Interview: 1.3, pg 73
describe('isPermutation', function () {
  it('is a function', function () {
    expect(strings.isPermutation).to.be.a('function');
  });
  xit('throws an error if the parameters are not strings', function () {
  });
  xit('returns true if the second string is a permutation of the first', function () {
  });
});
