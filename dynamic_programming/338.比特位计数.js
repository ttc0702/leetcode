/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

// 动态规划（找规律）
var countBits = function(n) {
  let dp = [0]
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2]
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }

  return dp
};
// @lc code=end

