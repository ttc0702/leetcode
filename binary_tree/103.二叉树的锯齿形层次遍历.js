/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */

// 层序遍历 + reverse
// var zigzagLevelOrder = function(root) {
//   if (!root) return []
  
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

//   return res.map((item, index) => index % 2 === 1 ? item.reverse() : item)
// };

// 层序遍历 + unshift
var zigzagLevelOrder = function(root) {
  if (!root) return []
  
  let res = []
  level([root])

  function level(nodes) {
    if (nodes.length === 0) return
    
    let vals = []
    let nextLevel = []

    nodes.forEach(node => {
      if (res.length % 2 === 0) {
        vals.push(node.val)
      } else {
        vals.unshift(node.val)
      }

      if (node.left) nextLevel.push(node.left)
      if (node.right) nextLevel.push(node.right)
    })

    res.push(vals)
    level(nextLevel)
  }

  return res
};

// @lc code=end

