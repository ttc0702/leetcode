/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 计数
// var sortColors = function(nums) {
//   let times = [0, 0, 0]
  
//   nums.forEach(num => {
//     times[num]++
//   })

//   nums.forEach((num, i) => {
//     if (i < times[0]) {
//       nums[i] = 0
//     } else if (i < times[0] + times[1]) {
//       nums[i] = 1
//     } else {
//       nums[i] = 2
//     }
//   })

//   return nums
// };

// 双指针
var sortColors = function(nums) {
  let i0 = i1 = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[i1], nums[i]] = [nums[i], nums[i1]]
      i1++
    } else if (nums[i] === 0) {
      [nums[i0], nums[i]] = [nums[i], nums[i0]]
      if (i0 !== i1) {
        [nums[i1], nums[i]] = [nums[i], nums[i1]]
      }
      i0++
      i1++
    }
  }

  return nums
};
// @lc code=end

