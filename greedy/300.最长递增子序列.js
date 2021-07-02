/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// var lengthOfLIS = function(nums) {
//   let dp = new Array(nums.length).fill(1)

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }

//   return Math.max(...dp)
// };

// 贪心 + 二分查找
var lengthOfLIS = function (nums) {
  let res = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > res[res.length - 1]) {
      res.push(num)
    } else if (num < res[0]) {
      res[0] = num
    } else if (num === res[0] || num === res[res.length - 1]) {
      continue
    } else {
      let L = 0,
        R = res.length - 1
      while (L < R - 1) {
        const mid = Math.floor((L + R) / 2)
        const middle = res[mid]
        if (num === middle) {
          R = mid
          break
        } else if (num < middle) {
          R = mid
        } else {
          L = mid
        }
      }
      res[R] = num
    }
  }

  return res.length
}
// @lc code=end

