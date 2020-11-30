/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

// 递归（错误）
// var isValidBST = function(root) {
//   if (!root || (!root.left && !root.right)) return true
  
//   if (root.left) {
//     if(root.left.val >= root.val) return false
//     isValidBST(root.left)
//   }
//   if (root.right) {
//     if(root.right.val <= root.val) return false
//     isValidBST(root.right)
//   }

//   return true
// };

// 递归
var isValidBST = function(root, ruler) {
  return helper(root, -Infinity, Infinity)

  function helper(node, min, max) {
    if (!node) return true
    if (node.val <= min || node.val >= max) return false
    
    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
  }
};

// 中序遍历 + 迭代
// var isValidBST = function(root) {
//   if (!root || (!root.left && !root.right)) return true
  
//   let res = []
//   inorder(root)

//   function inorder(node) {
//     if (node) {
//       inorder(node.left)
//       res.push(node.val)
//       inorder(node.right)
//     }
//   }

//   for (let i = 1; i < res.length; i++) {
//     if(res[i] <= res[i - 1]) return false
//   }

//   return true
// };

// 中序遍历
// var isValidBST = function(root) {
//   if (!root || (!root.left && !root.right)) return true
  
//   let res = []
//   let flag = true
//   inorder(root)

//   function inorder(node) {
//     if (node) {
//       inorder(node.left)
//       if (node.val <= res[res.length - 1]) {
//         flag = false
//       }
//       res.push(node.val)
//       inorder(node.right)
//     }
//   }

//   return flag
// };

// 中序遍历 + 及时退出
var isValidBST = function (root) {
  let res = []
  let stack = []

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= res[res.length - 1]) return false
    
    res.push(root.val)
    root = root.right
  }

  return true
};

// @lc code=end

