/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 暴力 dfs（时间复杂度 O(2**n)）
// var findTargetSumWays = function (nums, target) {
//   let res = 0
//   let len = nums.length
//   function dfs(index, target) {
//     const num = nums[index]
//     if (index === len - 1) {
//       // 注意 num 为 0 的情况，res 需要 +2
//       if (target === num) res++
//       if (target === -num) res++
//       return
//     }
//     dfs(index + 1, target - num)
//     dfs(index + 1, target + num)

//   }
//   dfs(0, target)

//   return res
// };

// 与 416 类似
// 动态规划
// var findTargetSumWays = function (nums, target) {
//   const len = nums.length
//   let sum = 0
//   nums.forEach(num => sum += num)
//   if (target > sum || target < -sum) return 0
//   // if (target === sum || target === -sum) return 1

//   let dp = []
//   dp[0] = new Array(2001).fill(0)
//   dp[0][nums[0] + 1000] += 1
//   dp[0][-nums[0] + 1000] += 1
//   for (let i = 1; i < nums.length; i++) {
//     dp[i] = new Array(2001).fill(0)
//     const num = nums[i]
//     for (let j = -1000; j <= 1000; j++) {
//       dp[i][j + 1000] = (dp[i - 1][j + num + 1000] || 0) + (dp[i - 1][j - num + 1000] || 0)
//     }
//   }

//   return dp[len - 1][target + 1000]
// }
var findTargetSumWays = function (nums, target) {
  const len = nums.length
  let sum = 0
  nums.forEach(num => sum += num)
  if (target > sum || target < -sum) return 0
  // if (target === sum || target === -sum) return 1

  let dp = []
  dp[0] = new Array(sum * 2 + 1).fill(0)
  dp[0][nums[0] + sum] += 1
  dp[0][-nums[0] + sum] += 1
  for (let i = 1; i < nums.length; i++) {
    dp[i] = new Array(sum * 2 + 1).fill(0)
    const num = nums[i]
    for (let j = -sum; j <= sum; j++) {
      dp[i][j + sum] = (dp[i - 1][j + num + sum] || 0) + (dp[i - 1][j - num + sum] || 0)
    }
  }

  return dp[len - 1][target + sum]
}
// @lc code=end

