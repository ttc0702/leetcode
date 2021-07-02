/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 两层循环，最坏时间复杂度 O(n²)，实际应远小于 O(n²)
// var trap = function (height) {
//   let sum = sumAfter = 0
//   for (let i = 0; i < height.length; i++) {
//     sum += height[i]
//   }

//   let max = [0, height[0]]
//   let high = [0, 0]
//   let trend = false

//   for (let i = 1; i < height.length; i++) {
//     if (height[i] < height[i - 1]) {
//       trend = true
//     } else if (height[i] > height[i - 1]) {
//       if (trend) {
//         if (height[i] > max[1]) {
//           for (let j = max[0] + 1; j < i; j++) {
//             height[j] = max[1]
//           }
//           max = high = [i, height[i]]
//           trend = false
//         } else if (height[i] > high[1]) {
//           for (let j = max[0] + 1; j < i; j++) {
//             height[j] = Math.max(height[j], height[i])
//           }
//           high = [i, height[i]]
//         } else {
//           for (let j = high[0] + 1; j < i; j++) {
//             height[j] = Math.max(height[j], height[i])
//           }
//         }
//       } else {
//         max = high = [i, height[i]]
//       }
//     }
//   }

//   for (let i = 0; i < height.length; i++) {
//     sumAfter += height[i]
//   }

//   return sumAfter - sum
// };

// 单调栈（很难想到，实际上是竖向一层一层累加）
// var trap = function (height) {
//   let sum = 0
//   let stack = []
//   for (let i = 0; i < height.length; i++) {
//     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop()
//       if (!stack.length) {
//         break
//       }
//       const left = stack[stack.length - 1]
//       const currWidth = i - left - 1
//       const currHeight = Math.min(height[left], height[i]) - height[top]
//       sum += currWidth * currHeight
//     }
//     stack.push(i)
//   }

//   return sum
// }

// 动态规划
// var trap = function (height) {
//   const len = height.length
//   let leftMax = []
//   let rightMax = []

//   for (let i = 0; i < len; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i])
//   }

//   for (let i = len - 1; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i])
//   }

//   let sum = 0
//   for (let i = 1; i < len - 1; i++) {
//     sum += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }

//   return sum
// }

// 双指针（优化动态规划，左右指针向最大值移动）
var trap = function (height) {
  let sum = 0
  let left = 0,
    right = height.length - 1
  let leftMax = 0,
    rightMax = 0
  
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      sum += leftMax - height[left]
      left++
    } else {
      sum += rightMax - height[right]
      right--
    }
  }

  return sum
}
// @lc code=end

