/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// hashmap
var lowestCommonAncestor = function (root, p, q) {
  let hash = {}
  function dfs(root) {
    if (!root) return
    
    if (root.left) {
      hash[root.left.val] = root
    }
    if (root.right) {
      hash[root.right.val] = root
    }

    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  let pathP = []
  while (p) {
    pathP.push(p)
    p = hash[p.val]
  }
  while (q) {
    if (pathP.includes(q)) {
      return q
    }
    q = hash[q.val]
  }
};

// 递归（很难想到）
// const lowestCommonAncestor = (root, p, q) => {
//   if (root == null) { // 遇到null，返回null 没有LCA
//     return null;
//   }
//   if (root == q || root == p) { // 遇到p或q，直接返回当前节点
//     return root;
//   }
//   // 非null 非q 非p，则递归左右子树
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   // 根据递归的结果，决定谁是LCA
//   if (left && right) {
//     return root;
//   }
//   if (left == null) {
//     return right;
//   }
//   return left;
// };

// @lc code=end

