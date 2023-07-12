import { expect } from 'chai';
import { removeDuplicates } from './remove-duplicates-from-sorted-array';


describe('removeDuplicates', () => {
  it('should remove duplicates from the sorted array [1,1,2]', () => {
    const nums = [1, 1, 2];
    const expectedOutput = 2;

    const result = removeDuplicates(nums);

    expect(result).to.equal(expectedOutput);
    expect(nums.slice(0, result)).to.have.members([1, 2]);
  });

  it('should remove duplicates from the sorted array [0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedOutput = 5;

    const result = removeDuplicates(nums);

    expect(result).to.equal(expectedOutput);
    expect(nums.slice(0, result)).to.have.members([0, 1, 2, 3, 4]);
  });

  it('should remove duplicates from an empty array', () => {
    const nums: number[] = [];
    const expectedOutput = 0;

    const result = removeDuplicates(nums);

    expect(result).to.equal(expectedOutput);
    expect(nums.slice(0, result)).to.have.members([]);
  });
});
