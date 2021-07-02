/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// var rob = function (nums) {
//   const len = nums.length

//   if (len === 1) {
//     return nums[0]
//   } else if (len === 2) {
//     return Math.max(nums[0], nums[1])
//   }

//   let prev = 0,
//     prev2 = nums[0],
//     res = resWithoutStart = resWithoutEnd = 0


//   for (let i = 1; i < len; i++) {
//     res = Math.max(prev2, prev + nums[i])
//     prev = prev2
//     prev2 = res
//   }

//   if (res === prev) {
//     return res
//   } else {
//     resWithoutEnd = prev
//     prev = 0
//     prev2 = nums[1]
//     for (let i = 2; i < len; i++) {
//       resWithoutStart = Math.max(prev2, prev + nums[i])
//       prev = prev2
//       prev2 = resWithoutStart
//     }
//     if (res === resWithoutStart) {
//       return res
//     } else {
//       return Math.max(resWithoutStart, resWithoutEnd)
//     }
//   }
// };

// 动态规划
// 先算不包括尾部的最大值，此时有一种情况会导致要求的值比此最大值大，即真正的最大值是偷了尾部，但没偷头部的
// 所以我们需要再算一次不包括头部的最大值，以排除这种可能性。
var rob = function (nums) {
  let len = nums.length

  if (len === 1) {
    return nums[0]
  } else if (len === 2) {
    return Math.max(nums[0], nums[1])
  }

  return Math.max(robScope(0, len - 2), robScope(1, len - 1))

  function robScope(start, end) {
    let prev = 0,
      prev2 = nums[start],
      res = nums[start]
    
    for (let i = start + 1; i < end + 1; i++) {
      res = Math.max(prev2, prev + nums[i])
      prev = prev2
      prev2 = res
    }

    return res
  }
}
// @lc code=end

