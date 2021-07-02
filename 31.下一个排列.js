/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var nextPermutation = function (nums) {
//   let flag = false
//   let best = [-1, -1]
//   const len = nums.length
//   for (let i = len - 1; i >= 1; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[i] > nums[j] && j > best[0]) {
//         flag = true
//         best = [j, i]
//         break
//       }
//     }
//     if (i === best[0]) {
//       break
//     }
//   }
//   if (!flag) return nums.reverse()

//   const left = best[0],
//     right = best[1]
//   nums.splice(left, 0, nums[right])
//   nums.splice(right + 1, 1)

//   for (let i = left + 1; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] > nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]
//       }
//     }
//   }

//   return nums
// };

// 如果数组是降序的，则不存在下一个更大的排列
// 故先从右往左找到第一个比右侧小的数，因为这个数位于低位，且破坏了降序的规律，故可以从它右侧找出一个比它大的数，来最低限度地使数字变大
// 再从右往左找到第一个比它大的数，交换两者的位置（这一步实际上是在找一个位置，使交换位置后右侧的数处于降序，方便下一步直接将右侧的数 reverse() 后拼接到左侧的后面）
var nextPermutation = function (nums) {
  const len = nums.length
  let flag = false
  for (let i = len - 2; i >= 0; i--) {
    if (flag) break
    
    if (nums[i] < nums[i + 1]) {
      for (let j = len - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
          const reverse = nums.splice(i + 1).reverse()
          nums.push(...reverse)
          flag = true
          break
        }
      }
    }
  }

  if (!flag) return nums.reverse()

  return nums
};
// @lc code=end

