/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// var rob = function (nums) {
//   const len = nums.length
//   let dp = [0, nums[0]]

//   for (let i = 2; i <= len; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
//   }

//   return dp[len]
// };

// 滚动数组
var rob = function (nums) {
  const len = nums.length
  let prev = 0,
    prev2 = nums[0],
    res = 0

  if (len === 1) {
    return prev2
  }

  for (let i = 1; i < len; i++) {
    res = Math.max(prev2, prev + nums[i])
    prev = prev2
    prev2 = res
  }

  return res
};
// @lc code=end

