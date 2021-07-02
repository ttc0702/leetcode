/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer-Moore 投票算法
// 投票法，存在两种情况：
// 众数抵消掉非众数，
// 非众数抵消非众数。
// 因为众数数量大于一半，所以剩下的一定是众数
var majorityElement = function(nums) {
  let candidate
  let count = 0

  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  return candidate
};
// @lc code=end

