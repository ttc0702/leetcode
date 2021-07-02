/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = { ')': '(', ']': '[', '}': '{' }
  // 处理类似 ']' 的特例
  // if (map[s[0]]) return false
  
  let left = ''
  for (let i of s) {
    if (i === '(' || i === '[' || i === '{') {
      left += i
    } else {
      const len = left.length
      if (len && left.lastIndexOf(map[i]) === len - 1) {
        left = left.slice(0, len - 1)
      } else {
        return false
      }
    }
  }
  return !left
};
// @lc code=end

