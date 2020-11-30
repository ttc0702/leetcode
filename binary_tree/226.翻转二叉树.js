/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 未先翻转左右两棵树（结果错误）
// var invertTree = function(root) {
//   if (!root) return null
  
//   let res = root
//   res.left = invertTree(root.right)
//   // 这里的 root.left 指向 res.left，导致原 root.left 信息丢失
//   res.right = invertTree(root.left)
  
//   return res
// };

var invertTree = function(root) {
  if (!root) return null
  
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  
  return root
};

// @lc code=end

