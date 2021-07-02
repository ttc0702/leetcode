/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 动态规划（利用动态规划或双重循环来解此类列举可能性的题，空间复杂度会很高，一般达到 O(n²)）
// var permute = function (nums) {
//   let dp = [[[nums[0]]]]
  
//   for (let i = 1; i < nums.length; i++) {
//     dp[i] = []
//     for (let j = 0; j < dp[i - 1].length; j++) {
//       for (let k = 0; k < dp[i - 1][j].length + 1; k++) {
//         const arr = dp[i - 1][j].slice(0, k).concat(nums[i]).concat(dp[i - 1][j].slice(k, dp[i - 1][j].length))
//         dp[i].push(arr)
//       }
//     }
//   }

//   return dp[nums.length - 1]
// }

// dfs
// var permute = function (nums) {
//   let res = []

//   dfs([])

//   function dfs(path) {
//     if (path.length === nums.length) {
//       // 这里 push 的是 path 的浅拷贝，因为 path 是公用变量，始终处于被 push 长度增加和被 pop 长度减少的循环中。
//       res.push(path.slice())
//       return
//     }
//     nums.forEach(num => {
//       if (path.includes(num)) return
//       path.push(num)
//       dfs(path)
//       // 这里的 pop 会在上一个 path 被 push 之后开始执行。
//       path.pop()
//     })
//   }

//   return res
// };

// 用哈希表记录已经加入路径的数字，空间换时间，避免直接调用 path.includes 这样的库函数，导致每次都是 O(n) 的查找时间。
var permute = function (nums) {
  let res = []
  let used = {}

  dfs([])

  function dfs(path) {
    if (path.length === nums.length) {
      // 这里 push 的是 path 的浅拷贝，因为 path 是公用变量，始终处于被 push 长度增加和被 pop 长度减少的循环中。
      res.push(path.slice())
      return
    }
    nums.forEach(num => {
      if (used[num]) return
      path.push(num)
      used[num] = true
      dfs(path)
      // 这里的 pop 会在上一个 path 被 push 之后开始执行。
      path.pop()
      used[num] = false
    })
  }

  return res
};

// @lc code=end

