/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

// 自顶向下
// var isBalanced = function(root) {
//   if (!root) return true
//   return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)

//   function depth(node) {
//     if (!node) return 0
//     return Math.max(depth(node.left), depth(node.right)) + 1
//   }
// };

// 自底向上（先序遍历）
var isBalanced = function(root) {
  return recur(root) !== -1

  // 此递归函数，既返回树的高度，又可在发现子树已经不平衡时，及时返回状态 -1，并将 -1 最快地传递到根节点
  function recur(node) {
    if (!node) return 0

    const left = recur(node.left)
    // 剪支，这里不能将返回 -1 的情况合并写在一起，必须分开写。
    if (left === -1) return -1
    
    const right = recur(node.right)
    if (right === -1) return -1
    
    if (Math.abs(left - right) > 1) {
      return -1
    } else {
      return Math.max(left, right) + 1
    }
  }
};

// @lc code=end

