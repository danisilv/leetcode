import { expect } from 'chai';
import { inorderTraversal, TreeNode } from './binary-tree-inorder-traversal';


describe('inorderTraversal', () => {
  it('should return the correct inorder traversal for a binary tree', () => {
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
    root.left.right = new TreeNode(5);

    const result = inorderTraversal(root);

    expect(result).to.deep.equal([4, 2, 5, 1, 3]);
  });

  it('should return an empty array for an empty tree', () => {
    const root = null;

    const result = inorderTraversal(root);

    expect(result).to.deep.equal([]);
  });

  it('should return a single-element array for a tree with only one node', () => {
    const root = new TreeNode(1);

    const result = inorderTraversal(root);

    expect(result).to.deep.equal([1]);
  });

  it('should return the correct inorder traversal for a tree with multiple nodes', () => {
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

    const result = inorderTraversal(root);

    expect(result).to.deep.equal([2, 5, 8, 10, 15, 20, 25]);
  });
});
