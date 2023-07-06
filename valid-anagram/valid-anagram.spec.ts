import { expect } from 'chai';
import { isAnagram } from './valid-anagram';


describe('isAnagram', () => {
  it('should return true for valid anagram strings', () => {
    const s = 'anagram';
    const t = 'nagaram';
    const expectedOutput = true;

    const result = isAnagram(s, t);

    expect(result).to.equal(expectedOutput);
  });

  it('should return false for non-anagram strings', () => {
    const s = 'rat';
    const t = 'car';
    const expectedOutput = false;

    const result = isAnagram(s, t);

    expect(result).to.equal(expectedOutput);
  });

  it('should return true for empty strings', () => {
    const s = '';
    const t = '';
    const expectedOutput = true;

    const result = isAnagram(s, t);

    expect(result).to.equal(expectedOutput);
  });


});
