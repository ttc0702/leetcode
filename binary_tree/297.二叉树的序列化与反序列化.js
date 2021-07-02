/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 递归
var serialize = function(root) {
  if (!root) return 'x'
  const left = serialize(root.left),
    right = serialize(root.right)
  
  return `${root.val},${left},${right}`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let list = data.split(',')

  function buildTree(list) {
    const val = list.shift()
    if (val === 'x') return null
    
    let node = new TreeNode(val)
    node.left = buildTree(list)
    node.right = buildTree(list)

    return node
  }

  return buildTree(list)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

