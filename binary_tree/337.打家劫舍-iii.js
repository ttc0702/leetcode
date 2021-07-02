/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  let checked = new Map(),
    unchecked = new Map()
  checked.set(null, 0)
  unchecked.set(null, 0)
  
  function dfs(node) {
    if (node) {
      dfs(node.left)
      dfs(node.right)
      // checked.set(node, node.val + (unchecked.get(node.left) || 0) + (unchecked.get(node.right) || 0))
      // unchecked.set(node, Math.max(checked.get(node.left) || 0, unchecked.get(node.left) || 0) + Math.max(checked.get(node.right) || 0, unchecked.get(node.right) || 0))
      checked.set(node, node.val + unchecked.get(node.left) + unchecked.get(node.right))
      unchecked.set(node, Math.max(checked.get(node.left), unchecked.get(node.left)) + Math.max(checked.get(node.right), unchecked.get(node.right)))
    }
  }

  dfs(root)
  return Math.max(checked.get(root), unchecked.get(root))
};
// @lc code=end

