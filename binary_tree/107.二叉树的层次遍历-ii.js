/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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

var levelOrderBottom = function(root) {
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

  return res.reverse()
};

// @lc code=end

