import { expect } from 'chai';
import { reverseString } from './reverse-string';


describe('reverseString', () => {
  it('should reverse the string correctly', () => {
    const str = ['h', 'e', 'l', 'l', 'o'];
    const expectedOutput = ['o', 'l', 'l', 'e', 'h'];

    reverseString(str);

    expect(str).to.deep.equal(expectedOutput);
  });

  it('should reverse an empty string', () => {
    const str: string[] = [];
    const expectedOutput: string[] = [];

    reverseString(str);

    expect(str).to.deep.equal(expectedOutput);
  });

  it('should reverse a string with a single character', () => {
    const str = ['a'];
    const expectedOutput = ['a'];

    reverseString(str);

    expect(str).to.deep.equal(expectedOutput);
  });

  it('should reverse a string with multiple characters', () => {
    const str = ['w', 'o', 'r', 'l', 'd'];
    const expectedOutput = ['d', 'l', 'r', 'o', 'w'];

    reverseString(str);

    expect(str).to.deep.equal(expectedOutput);
  });
});
