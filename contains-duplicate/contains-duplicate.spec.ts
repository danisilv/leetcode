import { expect } from 'chai';
import { containsDuplicate } from './contains-duplicate';


describe('containsDuplicate', () => {
  it('should return true for an array with duplicate elements [1, 2, 3, 1]', () => {
    const nums = [1, 2, 3, 1];
    const expectedOutput = true;

    const result = containsDuplicate(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return false for an array without duplicate elements [1, 2, 3, 4]', () => {
    const nums = [1, 2, 3, 4];
    const expectedOutput = false;

    const result = containsDuplicate(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return true for an array with duplicate elements [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const expectedOutput = true;

    const result = containsDuplicate(nums);

    expect(result).to.equal(expectedOutput);
  });

  it('should return false for an empty array', () => {
    const nums: number[] = [];
    const expectedOutput = false;

    const result = containsDuplicate(nums);

    expect(result).to.equal(expectedOutput);
  });
});
