/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */

var postorder = function(root) {
  let res = []
  post(root)

  function post(node) {
    if (node) {
      const { children } = node
      if (children) {
        children.forEach(item => {
          post(item)
        })
      }
      res.push(node.val)
    }
  }

  return res
};

// @lc code=end

