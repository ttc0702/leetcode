/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = []
  function dfs(path, node, target) {
    if (!node) return
    
    path = path.concat(node.val)
    if (!node.left && !node.right && node.val === target) {
      res.push(path)
    }

    dfs(path, node.left, target - node.val)
    dfs(path, node.right, target - node.val)
  }

  dfs([], root, targetSum)
  return res
};
// @lc code=end

