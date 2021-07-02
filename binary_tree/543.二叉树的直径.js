/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0
  function dfs(node) {
    if (!node) return 0
    let left = 0,
      right = 0
    if (node.left) {
      left = dfs(node.left) + 1
    }
    if (node.right) {
      right = dfs(node.right) + 1
    }
    const sum = left + right
    if (sum > max) max = sum
    return Math.max(left, right)
  }
  dfs(root)
  return max
};
// @lc code=end

