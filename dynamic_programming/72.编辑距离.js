/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length
  
  if (m * n === 0) {
    return m + n
  }

  let dp = []
  // 注意这里的 i,j 实际上是 word1,word2 的前 i,j 位字符，也即从 word1,word2 头部截取的长度，与一般循环中 i,j 为下标不同，故这里是 i < m + 1。
  for (let i = 0; i < m + 1; i++) {
    dp[i] = []
    for (let j = 0; j < n + 1; j++) {
      if (i === 0) {
        dp[i][j] = j
      } else if (j === 0) {
        dp[i][j] = i
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1])
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
      }
    }
  }

  return dp[m][n]
};
// @lc code=end

