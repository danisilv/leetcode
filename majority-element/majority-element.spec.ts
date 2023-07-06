import { expect } from 'chai';
import { majorityElement } from './majority-element';


describe('majorityElement', () => {
  it('should return the correct majority element for an array with a single majority element', () => {
    const nums = [3, 2, 3];
    const expectedOutput = 3;

    const result = majorityElement(nums);

    expect(result).to.equal(expectedOutput);
  });


  it('should return 0 for an array without a majority element', () => {
    const nums = [1, 2, 3, 4, 5];
    const expectedOutput = 0;

    const result = majorityElement(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return 1 for an array with a majority element', () => {
    const nums = [1];
    const expectedOutput = 1;

    const result = majorityElement(nums);

    expect(result).to.equal(expectedOutput);
  });
  it('should return the correct majority element for an array with multiple majority elements', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const expectedOutput = 2;

    const result = majorityElement(nums);

    expect(result).to.equal(expectedOutput);
  });
});
