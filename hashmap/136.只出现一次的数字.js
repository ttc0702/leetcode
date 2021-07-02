/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// hashmap
var singleNumber = function(nums) {
  let hash = {}
  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }

  for (let num in hash) {
    if(hash[num] === 1) return num
  }
};

// 异或运算
// var singleNumber = function(nums) {
//   let res = 0
//   for (let num of nums) {
//     res ^= num
//   }

//   return res
// };
// @lc code=end

