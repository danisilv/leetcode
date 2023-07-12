import { expect } from 'chai';
import { isSymmetric, TreeNode } from './symmetric-tree';


describe('isSymmetric', () => {
  it('should return true for a symmetric tree', () => {
    //       1
    //      / \
    //     2   2
    //    / \ / \
    //   3  4 4  3
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);

    const result = isSymmetric(root);

    expect(result).to.equal(true);
  });

  it('should return false for a non-symmetric tree', () => {
    //       1
    //      / \
    //     2   2
    //    / \ / \
    //   3  4 4  5
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);

    const result = isSymmetric(root);

    expect(result).to.equal(false);
  });

  it('should return true for an empty tree', () => {
    const root: TreeNode | null = null;

    const result = isSymmetric(root);

    expect(result).to.equal(true);
  });
});
