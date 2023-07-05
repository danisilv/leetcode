import { expect } from 'chai';
import { singleNumber } from './single-number';


describe('singleNumber', () => {
  it('should return the correct single number in an array with one single number', () => {
    const nums = [2];
    const expectedOutput = 2;

    const result = singleNumber(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct single number in an array with multiple numbers', () => {
    const nums = [4, 2, 1, 2, 1];
    const expectedOutput = 4;

    const result = singleNumber(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct single number in an array with multiple numbers and duplicate occurrences', () => {
    const nums = [1, 2, 3, 2, 1];
    const expectedOutput = 3;

    const result = singleNumber(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct single number in an array with a large number of elements', () => {
    const nums = [5, 7, 2, 3, 1, 5, 3, 1, 2];
    const expectedOutput = 7;

    const result = singleNumber(nums);

    expect(result).to.equal(expectedOutput);
  });
});
