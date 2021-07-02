/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 栈
// var longestValidParentheses = function(s) {
//   let maxLen = 0,
//     tempMax = 0
//   let stack = [-1]
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack.push(i)
//     } else {
//       stack.pop()
//       if (stack.length) {
//         tempMax = i - stack[stack.length - 1]
//         maxLen = Math.max(maxLen, tempMax)
//       } else {
//         stack.push(i)
//       }
//     }
//   }

//   return maxLen
// };

// 动态规划
var longestValidParentheses = function (s) {
  let maxLen = 0
  let dp = [0]

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      dp[i] = 0
    } else if (s[i - 1] === '(') {
      dp[i] = (dp[i - 2] || 0) + 2
    } else if(s[i - dp[i - 1] - 1] === '(') {
      dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0)
    } else {
      dp[i] = 0
    }
    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen
};
// @lc code=end

