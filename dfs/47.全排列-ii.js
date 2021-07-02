/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// dfs + 去重（超时）
// var permuteUnique = function (nums) {
//   let res = []
//   let rest = nums.slice()

//   dfs([])

//   function dfs(path) {
//     if (path.length === nums.length) {
//       // 这里 push 的是 path 的浅拷贝，因为 path 是公用变量，始终处于被 push 长度增加和被 pop 长度减少的循环中。
//       res.push(path.slice())
//       return
//     }
//     nums.forEach((num) => {
//       if (!rest.includes(num)) return
//       path.push(num)
//       rest.splice(rest.indexOf(num), 1)
//       dfs(path)
//       // 这里的 pop 会在上一个 path 被 push 之后开始执行。
//       path.pop()
//       rest.push(num)
//     })
//   }

//   let resStr = res.map(item => JSON.stringify(item))
//   res = Array.from(new Set(resStr)).map(item => JSON.parse(item))

//   return res
// };

// dfs 充分剪支
var permuteUnique = function (nums) {
  let res = []
  let rest = nums.slice()

  dfs([])

  function dfs(path) {
    if (path.length === nums.length) {
      // 这里 push 的是 path 的浅拷贝，因为 path 是公用变量，始终处于被 push 长度增加和被 pop 长度减少的循环中。
      res.push(path.slice())
      return
    }
    nums.forEach((num, index) => {
      if (rest.indexOf(num) !== index) return
      path.push(num)
      rest[index] = null
      dfs(path)
      // 这里的 pop 会在上一个 path 被 push 之后开始执行。
      path.pop()
      rest[index] = num
    })
  }

  return res
};

// @lc code=end

