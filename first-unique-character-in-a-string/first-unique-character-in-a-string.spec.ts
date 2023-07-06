import { expect } from 'chai';
import { firstUniqChar } from './first-unique-character-in-a-string';

describe('firstUniqChar', () => {
  it('should return the correct index of the first unique character in the string "leetcode"', () => {
    const s = 'leetcode';
    const expectedOutput = 0;

    const result = firstUniqChar(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct index of the first unique character in the string "loveleetcode"', () => {
    const s = 'loveleetcode';
    const expectedOutput = 2;

    const result = firstUniqChar(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return -1 for a string without any unique characters: "aabbcc"', () => {
    const s = 'aabbcc';
    const expectedOutput = -1;

    const result = firstUniqChar(s);

    expect(result).to.equal(expectedOutput);
  });

  it('should return -1 for an empty string', () => {
    const s = '';
    const expectedOutput = -1;

    const result = firstUniqChar(s);

    expect(result).to.equal(expectedOutput);
  });
});
