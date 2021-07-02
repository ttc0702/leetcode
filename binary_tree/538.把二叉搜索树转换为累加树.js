/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */

// 中序遍历
// var convertBST = function(root) {
//   let sum = 0
//   let arr = []
//   function add(node) {
//     if (node) {
//       add(node.left)
//       sum += node.val
//       arr.push(node.val)
//       add(node.right)
//     }
//   }
//   add(root)
//   sum += arr[0]
//   arr.unshift(arr[0])

//   function change(node) {
//     if (node) {
//       change(node.left)
//       sum -= arr.shift()
//       node.val = sum
//       change(node.right)
//     }
//   }
//   change(root)

//   return root
// };

// 逆中序遍历
var convertBST = function(root) {
  let sum = 0

  function change(node) {
    if (node) {
      change(node.right)
      sum += node.val
      node.val = sum
      change(node.left)
    }
  }
  change(root)

  return root
};
// @lc code=end

