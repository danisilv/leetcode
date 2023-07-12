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

export function isSymmetric(root: TreeNode | null): boolean {
    if (!root)
        return true

    let left = root.left;
    let right = root.right;
    return compare(left, right);
};

function compare(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2)
        return true

    if (!node1 || !node2 || node1.val != node2.val)
        return false;

    return compare(node1.left, node2.right) && compare(node1.right, node2.left)

}

