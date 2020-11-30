/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// 递归
var maxDepth = function (root) {
  
  function depth(node) {
    if(!node) return 0
    return Math.max(depth(node.left), depth(node.right)) + 1
  }

  return depth(root)
};

// 层序遍历
// var maxDepth = function (root) {
//   if (!root) return 0
  
//   let res = []
//   level([root])

//   function level(nodes) {
//     if (nodes.length === 0) return
    
//     let vals = []
//     let nextLevel = []

//     nodes.forEach(node => {
//       vals.push(node.val)
//       if (node.left) nextLevel.push(node.left)
//       if (node.right) nextLevel.push(node.right)
//     })

//     res.push(vals)
//     level(nextLevel)
//   }

//   return res.length
// };

// @lc code=end

