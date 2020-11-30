/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 递归
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null
  let root = new TreeNode()
  
  const rootVal = preorder[0]
  root.val = rootVal
  const rootInIndex = inorder.indexOf(rootVal)

  const leftPreorder = preorder.slice(1, rootInIndex + 1)
  // const rightPreorder = preorder.slice(rootInIndex + 1, preorder.length)
  const rightPreorder = preorder.slice(rootInIndex + 1)
  const leftInorder = inorder.slice(0, rootInIndex)
  // const rightInorder = inorder.slice(rootInIndex + 1, inorder.length)
  const rightInorder = inorder.slice(rootInIndex + 1)
    
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)

  return root
};

// 递归 + 指针
var buildTree = function(preorder, inorder) {
  const helper = (pStart, pEnd, iStart, iEnd) => {

  }

  return helper()
};

// @lc code=end

