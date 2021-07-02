/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums.unshift(1)
  nums.push(1)
  const len = nums.length
  let res = []
  for (let i = 0; i < len; i++) {
    res[i] = []
  }

  for (let i = len - 3; i >= 0; i--) {
    for (let j = i + 2; j < len; j++) {
      for (let k = i + 1; k < j; k++) {
        res[i][j] = Math.max(res[i][j] || 0, (res[i][k] || 0) + nums[i] * nums[k] * nums[j] + (res[k][j] || 0))
      }
    }
  }

  return res[0][len - 1]
};
// @lc code=end

