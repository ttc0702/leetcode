/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
  nums = nums.map(val => String(val))
  
  nums.sort((a, b) => {
    if (a + b > b + a) return -1
    if (a + b < b + a) return 1
    if (a === b) return 0
  })

  var str = nums.join('')
  return Number(str) === 0 ? '0' : str
};

// @lc code=end

