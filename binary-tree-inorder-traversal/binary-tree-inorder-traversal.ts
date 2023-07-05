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

export function inorderTraversal(root: TreeNode | null): number[] {
    if (!root)
        return []
   return[...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};


export function inorderTraversal2(root: TreeNode | null): number[] {
    if (!root)
        return []

    let stack: number[] = []

    function run(node: TreeNode) {
        if (node.left)
            run(node.left)
        stack.push(node.val);
        if (node.right)
            run(node.right)
    
    }
    run(root);
    return stack;
};