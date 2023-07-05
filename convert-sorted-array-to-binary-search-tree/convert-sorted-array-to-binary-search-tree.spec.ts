import { expect } from 'chai';
import { sortedArrayToBST, TreeNode } from './convert-sorted-array-to-binary-search-tree';

describe('sortedArrayToBST', () => {
  it('should return the correct binary search tree for a sorted array with odd length', () => {
    const nums = [-10, -3, 0, 5, 9];
    /*
                   0
                 /   \
               -3     9
              /  \
            -10   5
    */
    const expectedOutput = new TreeNode(0);
    expectedOutput.left = new TreeNode(-3);
    expectedOutput.right = new TreeNode(9);
    expectedOutput.left.left = new TreeNode(-10);
    expectedOutput.right.left = new TreeNode(5);

    const result = sortedArrayToBST(nums);

    expect(result).to.deep.equal(expectedOutput);
  });

 
  it('should return null for an empty array', () => {
    const nums: number[] = [];
    const expectedOutput = null;

    const result = sortedArrayToBST(nums);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return a single-node tree for an array with one element', () => {
    const nums = [5];
    const expectedOutput = new TreeNode(5);

    const result = sortedArrayToBST(nums);

    expect(result).to.deep.equal(expectedOutput);
  });
});
