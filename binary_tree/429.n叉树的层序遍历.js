/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if (!root) return []
  
  let res = []
  level([root])

  function level(nodes) {
    if (nodes.length === 0) return
    
    let vals = []
    let nextLevel = []

    nodes.forEach(node => {
      vals.push(node.val)
      const {children} = node
      if (children) {   
        children.forEach(item => {
          nextLevel.push(item)
        })
      }
    })

    res.push(vals)
    level(nextLevel)
  }

  return res
};

// @lc code=end

