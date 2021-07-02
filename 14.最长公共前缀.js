/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let maxPre = strs[0]
  for (let i = 1; i < strs.length; i++) {
    if (!maxPre.length) break
    
    const str = strs[i]
    let pre = ''
    for (let j = 0; j < str.length; j++) {
      if (maxPre[j] === str[j]) {
        pre = maxPre.slice(0, j + 1)
      } else {
        break
      }
    }
    maxPre = pre
  }

  return maxPre
};
// @lc code=end

