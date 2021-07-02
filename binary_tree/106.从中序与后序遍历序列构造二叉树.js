/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  function myBuildTree(inorder, postorder) {
    if (postorder.length === 0) return null
    let root = new TreeNode()
    
    const rootVal = postorder[postorder.length - 1]
    root.val = rootVal
    const rootInIndex = inorder.indexOf(rootVal)
  
    const leftpostorder = postorder.slice(0, rootInIndex)
    const rightpostorder = postorder.slice(rootInIndex, postorder.length - 1)
    const leftInorder = inorder.slice(0, rootInIndex)
    const rightInorder = inorder.slice(rootInIndex + 1, inorder.length)
      
    root.left = myBuildTree(leftInorder, leftpostorder)
    root.right = myBuildTree(rightInorder, rightpostorder)
  
    return root
  }
  return myBuildTree(inorder, postorder)
};

// @lc code=end

