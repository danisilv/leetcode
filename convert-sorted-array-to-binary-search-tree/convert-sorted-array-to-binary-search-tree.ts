//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/?envType=featured-list&envId=top-interview-questions

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length ==0)
        return null
    if (nums.length == 1)
        return new TreeNode(nums[0]);

    let center = Math.floor(nums.length/2);
    let leftTree = nums.slice(0,center);
    let rightTree = nums.slice(center+1);
    
    let centerNode = new TreeNode(nums[center]);
    centerNode.left = sortedArrayToBST(leftTree);
    centerNode.right = sortedArrayToBST(rightTree);

    return centerNode;
        
};