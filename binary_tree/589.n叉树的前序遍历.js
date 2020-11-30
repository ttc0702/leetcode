/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

var preorder = function(root) {
  let res = []
  pre(root)

  function pre(node) {
    if (node) {
      res.push(node.val)

      const { children } = node
      if (children) {
        children.forEach(item => {
          pre(item)
        })
      }
    }
  }

  return res
};

// @lc code=end

