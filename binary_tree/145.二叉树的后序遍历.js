/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let res = []
  postorder(root)

  function postorder(node) {
    if (node) {
      postorder(node.left)
      postorder(node.right)
      res.push(node.val)
    }
  }

  return res
};

// 迭代
// var postorderTraversal = function(root) {
//   let res = []
//   let stack = []
  
//   if (root) stack.push(root)
  
//   while (stack.length > 0) {
//     const curNode = stack.pop()
//     res.unshift(curNode.val)

//     if (curNode.left) stack.push(curNode.left)
//     if (curNode.right) stack.push(curNode.right)
//   }

//   return res
// };

// @lc code=end

