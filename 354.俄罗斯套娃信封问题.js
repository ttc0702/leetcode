/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */

// 类似 300
// var maxEnvelopes = function(envelopes) {
//   envelopes.sort((a, b) => a[0] - b[0])
//   // envelopes.sort((a, b) => {
//   //   if (a[0] === b[0]) {
//   //     return a[1] - b[1]
//   //   }
//   // })

//   let dp = new Array(envelopes.length).fill(1)
//   for (let i = 1; i < envelopes.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }

//   return Math.max(...dp)
// };

// w 升序，h 降序，则可以排除 w 维度
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => a[0] - b[0])
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
  })
  envelopes = envelopes.map(item => item[1])
  let dp = new Array(envelopes.length).fill(1)
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i] > envelopes[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}
// @lc code=end

