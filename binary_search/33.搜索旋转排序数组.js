/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  const len = nums.length
  if (len === 1) return nums[0] === target ? 0 : -1
  
  if (target < nums[0] && target > nums[len - 1]) {
    return -1
  }

  let L = 0,
    R = len - 1
  
  while (L < R) {
    const left = nums[L],
      right = nums[R]
    
    if (target === left) return L
    if (target === right) return R
    
    const m = Math.floor((L + R) / 2)
    const mid = nums[m]
    if (target === mid) return m
    
    
    // if (target > left) {
    //   if (mid > left && mid < target) {
    //     L = m + 1
    //   } else {
    //     R = m - 1
    //   }
    // } else {
    //   if (mid > target && mid < right) {
    //     R = m - 1
    //   } else {
    //     L = m + 1
    //   }
    // }

    if (mid > left) {
      if (target > left && target < mid) {
        R = m - 1
      } else {
        L = m + 1
      }
    } else {
      if (target > mid && target < right) {
        L = m + 1
      } else {
        R = m - 1
      }
    }
  }

  return -1
};
// @lc code=end

