/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 动态规划
// var canPartition = function(nums) {
//   const len = nums.length
//   if (len < 2) return false

//   let sum = 0
//   nums.forEach(item => sum += item)
//   const half = sum / 2
//   if (sum % 2 === 1 || half < Math.max(...nums)) return false

//   let dp = []
//   dp[0] = new Array(half + 1).fill(false)
//   dp[0][0] = true
//   dp[0][nums[0]] = true
//   for (let i = 1; i < len; i++) {
//     dp[i] = [true]
//     for (let j = 1; j <= half; j++) {
//       if (j >= nums[i]) {
//         dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j]
//       } else {
//         dp[i][j] = dp[i - 1][j]
//       }
//       if (j === half && dp[i][j]) {
//         return true
//       }
//     }
//   }

//   return false
// };

// 滚动数组
var canPartition = function (nums) {
  const len = nums.length
  if (len < 2) return false

  let sum = 0
  nums.forEach(item => sum += item)
  const half = sum / 2
  if (sum % 2 === 1 || half < Math.max(...nums)) return false

  let dp = new Array(half + 1).fill(false)
  dp[0] = true
  dp[nums[0]] = true
  for (let i = 1; i < len; i++) {
    // 注意这里要写成 j--，否则会导致 dp[j - nums[i]] 从当前循环中，数组已经变化的前位取值
    for (let j = half; j >= 1; j--) {
      if (j >= nums[i]) {
        dp[j] = dp[j - nums[i]] || dp[j]
      }
      if (j === half && dp[j]) {
        return true
      }
    }
  }

  return false
}
// @lc code=end

