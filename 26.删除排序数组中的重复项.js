/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// count 为重复元素的个数
// var removeDuplicates = function (nums) {
//   var count = 0,
//     len = nums.length

//   for (var i = 1; i < len; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[i - count] = nums[i]
//     } else {
//       count++
//     }
//   }

//   return len - count
// };

// count 为去重后的数组长度
var removeDuplicates = function (nums) {
  var count = 1,
    len = nums.length

  for (var i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[count] = nums[i]
      count++
    }
  }

  return count
};

// @lc code=end

