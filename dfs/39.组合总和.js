/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 动态规划不可行，因为可能有大量的重复解
// var combinationSum = function (candidates, target) {
//   let dp = new Array(target + 1)

//   for (let i = 1; i < target + 1; i++) {
//     dp[i] = []
//     for (let j = 0; j < candidates.length; j++) {
//       const candidate = candidates[j]
//       if (i === candidate) {
//         dp[i].push([candidate])
//       } else if (i > candidate) {
//         if (dp[i - candidate].length) {
//           // 这里的每次 push 都需要去重
//           dp[i].push(...dp[i - candidate].map(item => item.concat(candidate)))
//         }
//       }
//     }
//   }

//   return dp[target]
// };

// 回溯
var combinationSum = function (candidates, target) {
  let res = []
  function dfs(target, combine, idx) {
    if (idx === candidates.length) {
      return
    }

    if (target === 0) {
      res.push(combine)
      return
    }

    dfs(target, combine, idx + 1)

    const candidate = candidates[idx]
    if (target >= candidate) {
      dfs(target - candidate, [...combine, candidate], idx)
    }
  }

  dfs(target, [], 0)
  return res
};
// @lc code=end

