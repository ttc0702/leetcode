/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = max = min = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const mx = max,
      mn = min
    max = Math.max(mx * num, mn * num, num)
    min = Math.min(mx * num, mn * num, num)
    res = Math.max(res, max)
  }

  return res
};
// @lc code=end

