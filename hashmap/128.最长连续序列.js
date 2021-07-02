/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序
// var longestConsecutive = function (nums) {
//   const len = nums.length
//   if (len <= 1) return len
  
//   nums.sort((a, b) => a - b)
//   let max = 1
//   let curr = 1
//   for (let i = 1; i < len; i++) {
//     if (nums[i] - nums[i - 1] === 1) {
//       curr++
//       if (curr > max) max = curr
//     } else if (nums[i] - nums[i - 1] > 1) {
//       curr = 1
//     }
//   }

//   return max
// };

// hashmap
var longestConsecutive = function (nums) {
  let hash = {}
  for (let num of nums) {
    hash[num] = true
  }
  
  let max = 0
  let curr
  // 用 used 记录已经用过的数字
  let used = {}
  for (let num of nums) {
    // 只尝试匹配没有使用过的前驱数 num - 1
    if (!hash[num - 1] && !used[num]) {
      used[num] = true
      curr = 1
      while (hash[num + curr]) {
        curr++
      }
      if (curr > max) max = curr
    }
  }

  return max
};
// @lc code=end

