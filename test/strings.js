var expect = require('chai').expect
  , assert = require('chai').assert
  , strings = require('../data-structures/strings.js')
  ;

describe('getPermutations', function() {
  it('returns all permutations for a given string', function() {
    assert.sameMembers(strings.getPermutations('a'), ['a']);
    assert.sameMembers(strings.getPermutations('ab'), ['ab', 'ba']);
    assert.sameMembers(strings.getPermutations('abc'), ['cab', 'acb', 'abc', 'cba', 'bca', 'bac']);
  });
  it('returns only unique permutations', function() {
    assert.sameMembers(strings.getPermutations('apps'), ['apps', 'apsp', 'aspp', 'ppsa', 'ppas', 'psap', 'pspa', 'pasp', 'paps', 'sapp', 'spap', 'sppa']);
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
  xit('is a function', function () {
    expect(strings.isPermutation).to.be.a('function');
  });
  xit('throws an error if the parameters are not strings', function () {
  });
  xit('returns true if the second string is a permutation of the first', function () {
  });
});
