/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 中心扩展
var countSubstrings = function(s) {
  let count = s.length
  for (let i = 0; i < s.length; i++) {
    let j = k = 1
    while (s[i - j] && s[i - j] === s[i + j]) {
      count++
      j++
    }
    
    if (s[i] === s[i + 1]) {
      count++
      while (s[i - k] && s[i - k] === s[i + 1 + k]) {
        count++
        k++
      }
    }
  }

  return count
};
// @lc code=end

