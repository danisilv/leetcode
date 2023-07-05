

import { expect } from 'chai';
import { maxDepth, TreeNode } from './maximum-depth-of-binary-tree';



describe('maxDepth', () => {
  it('should return the correct maximum depth for a binary tree', () => {
    /*
                1
               / \
              2   3
             / \
            4   5
    */
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    // root.left.right = new TreeNode(5);

    const result = maxDepth(root);

    expect(result).to.equal(3);
  });

  it('should return 0 for an empty tree', () => {
    const root = null;

    const result = maxDepth(root);

    expect(result).to.equal(0);
  });

  it('should return 1 for a tree with only one node', () => {
    const root = new TreeNode(1);

    const result = maxDepth(root);

    expect(result).to.equal(1);
  });

  it('should return the correct maximum depth for a tree with multiple nodes', () => {
    /*
                10
               /  \
              5    20
             / \   / \
            2   8 15  25
    */
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(20);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(8);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(25);
    root.right.right.right = new TreeNode(26);

    const result = maxDepth(root);

    expect(result).to.equal(4);
  });
});
