/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 先找到一个 target，在向两边扩展
// var searchRange = function(nums, target) {
//   let L = 0,
//     R = nums.length - 1
  
//   let start = -1
//   while (L <= R) {
//     if (target === nums[L]) start = L
//     if (target === nums[R]) start = R
    
//     const m = Math.floor((L + R) / 2)
//     const mid = nums[m]
//     if (target === mid) {
//       start = m
//       break
//     } else if (target < mid) {
//       R = m - 1
//     } else {
//       L = m + 1
//     }
//   }

//   if (start === -1) return [-1, -1]

//   while (start > 0 && nums[start - 1] === target) {
//     start--
//   }
    
//   let end = start
//   while (end < nums.length - 1 && nums[end + 1] === target) {
//     end++
//   }

//   return [start, end]
// };

// 分别找到头尾两个 target
var searchRange = function(nums, target) {
  function binarySearch(nums, target, direction) {
    const len = nums.length
    
    let L = 0,
    R = len - 1

    let index = -1
    while (L <= R) {
      if (target === nums[L]) index = L
      if (target === nums[R]) index = R
      
      const m = Math.floor((L + R) / 2)
      const mid = nums[m]
      if (target === mid) {
        index = m
        if (direction === 'start') {
          R = m - 1
        } else {
          L = m + 1
        }
      } else if (target < mid) {
        R = m - 1
      } else {
        L = m + 1
      }
    }

    return index
  }

  let start = binarySearch(nums, target, 'start')

  if (start === -1) return [-1, -1]
  
  let end = binarySearch(nums, target, 'end')

  return [start, end]
};
// @lc code=end

