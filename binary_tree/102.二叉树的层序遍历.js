/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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

// 在下一次遍历中判断空节点
// var levelOrder = function (root) {
//   let res = []
//   level([root])

//   function level(nodes) {
//     if (nodes.filter(node => node !== null).length === 0) return
    
//     let vals = []
//     let nextLevel = []

//     nodes.forEach(node => {
//       if(!node) return
//       vals.push(node.val)
//       nextLevel.push(node.left, node.right)
//     })

//     res.push(vals)
//     level(nextLevel)
//   }

//   return res
// };

// 在本次遍历中判断空节点
var levelOrder = function (root) {
  if (!root) return []
  
  let res = []
  level([root])

  function level(nodes) {
    if (nodes.length === 0) return
    
    let vals = []
    let nextLevel = []

    nodes.forEach(node => {
      vals.push(node.val)
      if (node.left) nextLevel.push(node.left)
      if (node.right) nextLevel.push(node.right)
    })

    res.push(vals)
    level(nextLevel)
  }

  return res
};

// 在本次遍历中判断空节点，并利用全局变量节省空间？
// var levelOrder = function (root) {
//   if (!root) return []
  
//   let res = []
//   let vals = []
//   let nextLevel = []

//   level([root])

//   function level(nodes) {
//     if (nodes.length === 0) return

//     vals = []
//     nextLevel = []

//     nodes.forEach(node => {
//       vals.push(node.val)
//       if (node.left) nextLevel.push(node.left)
//       if (node.right) nextLevel.push(node.right)
//     })

//     res.push(vals)
//     level(nextLevel)
//   }

//   return res
// };

// 迭代
// var levelOrder = function (root) {
//   if (!root) return []
  
//   let res = []
//   let stack = []

//   stack.push(root)
//   while (stack.length !== 0) {
//     const currentLength = stack.length
//     res.push([])

//     for (let i = 0; i < currentLength; i++) {
//       const node = stack.shift()
//       res[res.length - 1].push(node.val)
//       if(node.left) stack.push(node.left)
//       if(node.right) stack.push(node.right)
//     }
//   }

//   return res
// };

// @lc code=end

