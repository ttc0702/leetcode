/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 使用除法
// var productExceptSelf = function(nums) {
//   let all = 1
//   let numsOfZero = 0
//   let res = []
//   for(let num of nums){
//     if (num === 0) {
//       numsOfZero++
//     } else {
//       all *= num
//     }
//     if (numsOfZero === 2) {
//       return new Array(nums.length).fill(0)
//     }
//   }
//   for (let num of nums) {
//     if (num === 0) {
//       res.push(all)
//     } else {
//       if (numsOfZero) {
//         res.push(0)
//       } else {
//         res.push(all / num)
//       }
//     }
//   }

//   return res
// };

// 使用输出数组保存右乘积列表，并动态更新左乘积列表
// 由于输出数组不被视为额外空间，故可以实现 O(1) 的空间复杂度
var productExceptSelf = function (nums) {
  let res = []
  const len = nums.length
  res[len - 1] = 1
  for (let i = len - 2; i >= 0; i--) {
    res[i] = res[i + 1] * nums[i + 1]
  }
  let left = 1
  for (let i = 0; i < len; i++) {
    res[i] *= left
    left *= nums[i]
  }

  return res
}
// @lc code=end

