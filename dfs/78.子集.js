/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 动态规划
// var subsets = function (nums) {
//   const len = nums.length
//   let dp = []
  
//   dp[0] = [[], [nums[0]]]
//   for (let i = 1; i < len; i++) {
//     const num = nums[i]
//     dp[i] = dp[i - 1].concat(dp[i - 1].map(item => item.concat(num)))
//   }
  
//   return dp[len - 1]
// };

// 回溯
// var subsets = function (nums) {
//   let res = []

//   function dfs(index, list) {
//     if (index === nums.length) {
//       res.push(list.slice())
//       return
//     }

//     // 优先遍历元素少的子集
//     // dfs(index + 1, list)
//     // list.push(nums[index])
//     // dfs(index + 1, list)
//     // list.pop()

//     // 优先遍历元素多的子集
//     list.push(nums[index])
//     dfs(index + 1, list)
//     list.pop()
//     dfs(index + 1, list)
//   }

//   dfs(0, [])

//   return res
// };

// 回溯，优化二叉树
var subsets = function (nums) {
  let res = []

  function dfs(index, list) {
    res.push(list.slice())
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i])
      dfs(i + 1, list)
      list.pop()
    }
  }

  dfs(0, [])

  return res
};
// @lc code=end

