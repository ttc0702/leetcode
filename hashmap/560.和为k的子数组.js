/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 滑动窗口（可能有负值，无法使用）
// var subarraySum = function(nums, k) {
//   let count = 0
//   let sum = 0
//   let L = 0
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     if (sum === k) count++
//     while (sum > k && i > L) {
//       sum -= nums[L]
//       if (sum === k) count++
//       L++
//     }
//   }

//   return count
// };

// hashtable 统计前缀和
var subarraySum = function (nums, k) {
  let hash = {}
  hash[0] = 1
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    
    count += hash[sum - k] || 0
    if (!hash[sum]) {
      hash[sum] = 1
    } else {
      hash[sum]++
    }
  }

  return count
}
// @lc code=end

