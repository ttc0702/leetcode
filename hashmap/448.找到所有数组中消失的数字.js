/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 利用返回数组充当 hashmap
// var findDisappearedNumbers = function(nums) {
//   let res = []
//   for (let i = 0; i < nums.length; i++) {
//     res[i] = i + 1
//   }
//   for (let num of nums) {
//     if (res[num - 1]) {
//       res[num - 1] = 0
//     }
//   }

//   return res.filter(item => item !== 0)
// };

// 利用数组本身充当 hashmap
var findDisappearedNumbers = function (nums) {
  let n = nums.length
  nums.forEach(num => {
    nums[(num - 1) % n] += n
  })

  let res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      res.push(i + 1)
    }
  }

  return res
}
// @lc code=end

