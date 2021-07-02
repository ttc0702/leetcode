/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let max

  function dfs(node) {
    if (!node) return 0
    
    const left = dfs(node.left),
      right = dfs(node.right)
    
    const nodeMax = node.val + left + right
    if (!max || nodeMax > max) max = nodeMax
    
    const output = node.val + Math.max(left, right)
    return output > 0 ? output : 0
  }

  dfs(root)
  return max
};
// @lc code=end

