/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var moveZeroes = function(nums) {
//   let right = nums.length
//   for (let i = right; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums.splice(right, 0, 0)
//       right--
//     }
//   }

//   return nums
// };

// 双指针
var moveZeroes = function (nums) {
  let left = right = 0
  while (right < nums.length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }

    right++
  }
  return nums
}
// @lc code=end

