/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 暴力解（时间复杂度为 O((n − k + 1) * k) = O(nk)，超出时间限制）
// var maxSlidingWindow = function (nums, k) {
//   let res = []
//   const len = nums.length
//   for (let i = 0; i < len - k + 1; i++) {
//     res.push(Math.max(...nums.slice(i, i + k)))
//   }

//   return res
// };

// 单调栈
// var maxSlidingWindow = function (nums, k) {
//   let arr = [0]
//   for (let i = 1; i < k; i++) {
//     while (nums[i] > nums[arr[arr.length - 1]]) {
//       arr.pop()
//     }
//     arr.push(i)
//   }

//   let res = [nums[arr[0]]]
//   for (let i = k; i < nums.length; i++) {
//     while (nums[i] > nums[arr[arr.length - 1]]) {
//       arr.pop()
//     }
//     arr.push(i)
//     if (arr[0] < i - k + 1) {
//       arr.shift()
//     }
//     res.push(nums[arr[0]])
//   }

//   return res
// }

// 分块 + 预处理
var maxSlidingWindow = function (nums, k) {
  const len = nums.length
  let prefixMax = [],
    suffixMax = []
  
  for (let i = 0; i < len; i++) {
    if (i % k === 0) {
      prefixMax[i] = nums[i]
    } else {
      prefixMax[i] = Math.max(prefixMax[i - 1], nums[i])
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    if ((i + 1) % k === 0) {
      suffixMax[i] = nums[i]
    } else {
      suffixMax[i] = Math.max(suffixMax[i + 1], nums[i])
    }
  }

  let res = []
  for (let i = 0; i < len - k + 1; i++) {
    res[i] = Math.max(suffixMax[i], prefixMax[i + k - 1])
  }

  return res
}

// @lc code=end

