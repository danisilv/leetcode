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

export function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const countLeft = maxDepth(root.left);
    const countRight = maxDepth(root.right);

    return Math.max(countLeft, countRight) + 1;
};

export function maxDepth2(root: TreeNode | null): number {

    function calculateDepth(root: TreeNode, actualDepth: number) {
        if (root.left)
            calculateDepth(root.left, actualDepth + 1)

        if (root.right)
            calculateDepth(root.right, actualDepth + 1)

        if (actualDepth > maxDepth)
            maxDepth = actualDepth
    }

    if (!root)
        return 0;

    let maxDepth = 1
    root.left && calculateDepth(root.left, 2) 
    root.right && calculateDepth(root.right, 2) 

    return maxDepth
};