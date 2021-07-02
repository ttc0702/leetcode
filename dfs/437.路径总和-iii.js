/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let count = 0
  function dfs(prev, node, target) {
    if (!node) return
    if (node.val === target) {
      count++
    }

    if (!prev) {
      dfs(false, node.left, target)
      dfs(false, node.right, target)
    }
    dfs(true, node.left, target - node.val)
    dfs(true, node.right, target - node.val)
  }

  dfs(false, root, targetSum)
  return count
};
// @lc code=end

