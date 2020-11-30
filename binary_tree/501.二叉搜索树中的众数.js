/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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

// 中序遍历
var findMode = function (root) {
  let res = []
  let arr = []
  inorder(root)

  function inorder(node) {
    if (node) {
      inorder(node.left)
      arr.push(node.val)
      inorder(node.right)
    }
  }

  // 创建 hash 表，记录每个数字出现的次数
  let hash = {}
  arr.forEach((item, index) => {
    if (item !== arr[index - 1]) {
      hash[item] = 1
    } else {
      hash[item]++
    }
  })

  let maxTimes = Math.max(...Object.values(hash))
  for (let prop in hash) {
    if (hash[prop] === maxTimes) {
      res.push(Number(prop))
    }
  }

  return res
};

// Morris 中序遍历
// var findMode = function (root) {

// };

// @lc code=end

