/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

// 递归
var preorderTraversal = function(root) {
  let res = []
  preorder(root)

  function preorder(node) {
    if (node) {
      res.push(node.val)
      preorder(node.left)
      preorder(node.right)
    }
  }

  return res
};

// 迭代
// var preorderTraversal = function(root) {
//   let res = []
//   let stack = []
  
//   if (root) stack.push(root)
  
//   while (stack.length > 0) {
//     const curNode = stack.pop()
//     res.push(curNode.val)

//     if (curNode.right) stack.push(curNode.right)
//     if (curNode.left) stack.push(curNode.left)
//   }

//   return res
// };

// @lc code=end

