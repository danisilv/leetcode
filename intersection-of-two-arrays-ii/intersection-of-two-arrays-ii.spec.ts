import { expect } from 'chai';
import { intersect } from './intersection-of-two-arrays-ii';

describe('intersect', () => {
  it('should return the correct intersection of two arrays [1,2,2,1] and [2,2]', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const expectedOutput = [2, 2];

    const result = intersect(nums1, nums2);

    expect(result).to.have.members(expectedOutput);
  });

  it('should return the correct intersection of two arrays [4,9,5] and [9,4,9,8,4]', () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const expectedOutput = [4, 9];

    const result = intersect(nums1, nums2);

    expect(result).to.have.members(expectedOutput);
  });

  it('should return an empty array for two arrays with no common elements [1,2,3] and [4,5,6]', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6];
    const expectedOutput: number[] = [];

    const result = intersect(nums1, nums2);

    expect(result).to.have.members(expectedOutput);
  });

  it('should return an empty array for two arrays with no common elements [4,7,9,7,6,7] and [5,0,0,6,1,6,2,2,4]', () => {
    const nums1 =  [4,7,9,7,6,7];
    const nums2 = [5,0,0,6,1,6,2,2,4];
    const expectedOutput = [4,6]

    const result = intersect(nums1, nums2);

    expect(result).to.have.members(expectedOutput);
  });

  it('should return an empty array for two empty arrays', () => {
    const nums1: number[] = [];
    const nums2: number[] = [];
    const expectedOutput: number[] = [];

    const result = intersect(nums1, nums2);

    expect(result).to.have.members(expectedOutput);
  });
});
