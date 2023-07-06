import { expect } from 'chai';
import { missingNumber } from './missing-number';


describe('missingNumber', () => {
  it('should return the correct missing number for an array with one missing number', () => {
    const nums = [3, 0, 1];
    const expectedOutput = 2;

    const result = missingNumber(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct missing number for an array with one missing number 2', () => {
    const nums = [0,1];
    const expectedOutput = 2;

    const result = missingNumber(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return the correct missing number for an array with one missing number 3', () => {
    const nums = [5];
    const expectedOutput = 0;

    const result = missingNumber(nums);

    expect(result).to.equal(expectedOutput);
  });


});
