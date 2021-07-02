/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 后一项的值只与前一项相关，可以使用滚动数组
var maxSubArray = function (nums) {
  let max = prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let curr = prev > 0 ? nums[i] + prev : nums[i]
    if (curr > max) max = curr
    prev = curr
  }

  return max
};

// @lc code=end

