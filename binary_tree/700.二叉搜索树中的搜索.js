/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function (root, val) {
  let target = null
  search(root)

  function search(node) {
    if (node.val === val) {
      target = node
    } else if (node.val > val && node.left) {
      search(node.left)
    } else if (node.val < val && node.right) {
      search(node.right)
    }
  }

  return target
};

// @lc code=end

