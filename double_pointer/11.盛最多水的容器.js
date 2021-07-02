/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力解（超出时间限制）
// var maxArea = function(height) {
//   let max = 0
//   const len = height.length

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const area = Math.min(height[i], height[j]) * (j - i)
//       if (area > max) max = area
//     }
//   }

//   return max
// };

// 双指针
// 双指针实际上是一种对暴力解法的优化，巧妙地通过判断出左右指针中较小的那个，并移动之，一步操作即相当于暴力解法中的一次遍历，故可以将时间复杂度从 O(n²) 降至 O(n)
var maxArea = function(height) {
  let L = 0,
    R = height.length - 1

  let max = 0
  while(L < R) {
    const area = Math.min(height[L], height[R]) * (R - L)
    if (area > max) max = area
    if (height[L] <= height[R]) {
      L++
    } else {
      R--
    }
  }

  return max
};
// @lc code=end

