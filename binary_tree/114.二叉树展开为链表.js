/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let list = preorderTraversal(root)
  // preorderTraversal(root, list)
  let curr = root
  list.shift()
  while (list.length) {
    curr.left = null
    curr.right = list.shift()
    curr = curr.right
  }
  function preorderTraversal(root) {
    let list = []
    preorder(root)
    function preorder(root) {
      if (root !== null) {
        list.push(root)
        preorder(root.left)
        preorder(root.right)
      }
    }
    return list
  }
};

// 空间复杂度为 O(1) 的方法
// var flatten = function(root) {
//   let curr = root;
//   while (curr !== null) {
//       if (curr.left !== null) {
//           const next = curr.left;
//           let predecessor = next;
//           while (predecessor.right !== null) {
//               predecessor = predecessor.right;
//           }
//           predecessor.right = curr.right;
//           curr.left = null;
//           curr.right = next;
//       }
//       curr = curr.right;
//   }
// };
// @lc code=end

