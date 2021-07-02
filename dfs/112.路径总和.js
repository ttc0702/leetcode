/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false
  function dfs(node, target) {
    if (!node) return
    
    if (!node.left && !node.right && node.val === target) {
      flag = true
      return
    }
    
    dfs(node.left, target - node.val)
    dfs(node.right, target - node.val)
  }

  dfs(root, targetSum)
  return flag
};
// @lc code=end

