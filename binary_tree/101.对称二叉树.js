/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

// 层序遍历 + reverse + JSON.stringify() 比对（执行出错：堆溢出）
// var isSymmetric = function(root) {
//   if (!root || (!root.left && !root.right)) return true
//   if (!root.left || !root.right) return false
  
//   let left = []
//   let right = []
//   let vals = []
//   let nextLevel = []

//   level([root.left], 'left')
//   level([root.right], 'right')

//   function level(nodes, type) {
//     // if (nodes.length === 0) return
//     if (nodes.filter(node => node.val !== null).length === 0) return

//     nextLevel = []
//     nodes.forEach(node => {
//       vals.push(node.val)
//       if (node.left) {
//         nextLevel.push(node.left)
//       } else {
//         nextLevel.push({ val: null })
//       }
//       if (node.right) {
//         nextLevel.push(node.right)
//       } else {
//         nextLevel.push({ val: null })
//       }
//     })

//     switch (type) {
//       case 'left':
//         left.push(vals)
//         break
//       case 'right':
//         right.push(vals)
//     }
//     vals = []

//     level(nextLevel, type)
//   }

//   return JSON.stringify(left) === JSON.stringify(right.map(item => item.reverse()))
// };

// 逐层比对（执行出错：堆溢出）
// var isSymmetric = function(root) {
//   if (!root || (!root.left && !root.right)) return true
//   if (!root.left || !root.right) return false
  
//   let flag = true
//   level([root.left], [root.right])

//   function level(leftTree, rightTree) {
//     if (leftTree.filter(node => node.val !== null).length === 0 && leftTree.filter(node => node.val !== null).length === 0) return

//     const left = next(leftTree)
//     const right = next(rightTree)

//     if (JSON.stringify(left[0]) !== JSON.stringify(right[0].reverse())) {
//       flag = false
//     }
//     level(left[1], right[1])
//   }

//   function next(nodes) {
//     let vals = []
//     let nextLevel = []

//     nodes.forEach(node => {
//       vals.push(node.val)
//       if (node.left) {
//         nextLevel.push(node.left)
//       } else {
//         nextLevel.push({ val: null })
//       }
//       if (node.right) {
//         nextLevel.push(node.right)
//       } else {
//         nextLevel.push({ val: null })
//       }
//     })
//     return [vals, nextLevel]
//   }

//   return flag
// };

// 递归
var isSymmetric = (root) => {
  if (root === null) return true;           
  return check(root.left, root.right);
  
  function check(left, right) {
    // 如果两个子树都为 null，是对称的
    if (!left && !right) return true
    // 一个子树存在，一个不存在，肯定不对称。
    if (!left || !right) return false
    
    // 如果两个子树都存在，则需要 root 值相同，且他们的子树也满足镜像
    return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
  };
};

// BFS
// var isSymmetric = (root) => {
//   if (root === null) return true;           

//   const queue = [root.left, root.right]
//   while (queue.length) {
//     for (let i = 0; i < queue.length; i += 2) {
//       const left = queue.shift()
//       const right = queue.shift()

//       if(!left && !right) continue

//       if (!left || !right || left.val !== right.val) {
//         return false
//       }

//       queue.push(left.left, right.right)
//       queue.push(left.right, right.left)
//     }
//   }

//   return true
// };

// @lc code=end

