/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 单调栈
// var findUnsortedSubarray = function (nums) {
//   const len = nums.length
//   // 先正序遍历最小值
//   let min = [0]
//   for (let i = 1; i < len; i++) {
//     if (nums[i] >= nums[i - 1] && i === min[min.length - 1] + 1) {
//       min.push(i)
//     } else {
//       while (nums[min[min.length - 1]] > nums[i]) {
//         min.pop()
//       }
//     }
//   }
//   if (min.length === len) return 0

//   const minIndex = min.length ? min[min.length - 1] + 1 : 0

//   // 再逆序遍历最大值
//   let max = [len - 1]
//   for (let i = len - 2; i >= 0; i--) {
//     if (nums[i] <= nums[i + 1] && i === max[max.length - 1] - 1) {
//       max.push(i)
//     } else {
//       while (nums[max[max.length - 1]] < nums[i]) {
//         max.pop()
//       }
//     }
//   }
//   const maxIndex = max.length ? max[max.length - 1] - 1 : len - 1

//   return maxIndex - minIndex + 1
// };

// 找到无序数组中最小和最大元素的正确位置
var findUnsortedSubarray = function (nums) {
  const len = nums.length
  let min,
    minIndex
  for (let i = 1; i < len; i++) {
    if (min === undefined) {
      if (nums[i] < nums[i - 1]) {
        min = nums[i]
      }
    } else if (nums[i] < min) {
      min = nums[i]
    }
  }
  if (min === undefined) {
    return 0
  } else {
    for (let i = 0; i < len; i++) {
      if (nums[i] > min) {
        minIndex = i
        break
      }
    }
  }

  let max,
    maxIndex
  for (let i = len - 2; i >= 0; i--) {
    if (max === undefined) {
      if (nums[i] > nums[i + 1]) {
        max = nums[i]
      }
    } else if (nums[i] > max) {
      max = nums[i]
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] < max) {
      maxIndex = i
      break
    }
  }

  return maxIndex - minIndex + 1
}
// @lc code=end

