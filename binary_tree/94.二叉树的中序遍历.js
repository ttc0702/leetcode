/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */

// 递归
// var inorderTraversal = function(root) {
//   let res = []
//   inorder(root)

//   function inorder(node) {
//     if (node) {
//       inorder(node.left)
//       res.push(node.val)
//       inorder(node.right)
//     }
//   }

//   return res
// };

// 迭代
var inorderTraversal = function(root) {
  let res = []
  let stack = []
  
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }

  return res
};

// @lc code=end

