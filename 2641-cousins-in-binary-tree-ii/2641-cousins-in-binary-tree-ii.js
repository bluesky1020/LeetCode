/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  let sum = [];
  function DFS(node, depth) {
    if (sum[depth] === undefined)
      sum[depth] = 0;
    sum[depth] += node.val;
    if (node.left !== null)
      DFS(node.left, depth + 1);
    if (node.right !== null)
      DFS(node.right, depth + 1);
  }
  DFS(root, 0);
  function Replace(node, depth) {
    if (depth === 0) node.val = 0;
    if (sum[depth + 1] === undefined) return;
    let minus = 0;
    if (node.left !== null) minus += node.left.val;
    if (node.right !== null) minus += node.right.val;
    if (node.left !== null) {
      node.left.val = sum[depth + 1] - minus;
      Replace(node.left, depth + 1);
    }
    if (node.right !== null) {
      node.right.val = sum[depth + 1] - minus;
      Replace(node.right, depth + 1);
    }
  }
  Replace(root, 0);
  return root;
};