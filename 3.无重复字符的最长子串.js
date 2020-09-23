/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  var i = 0,
    res = 0,
    n = 0

  for (var j = 0; j < s.length; j++) {
    n = s.slice(i, j).indexOf(s[j])
    if (n === -1) {
      res = Math.max(res, j - i + 1)
    } else {
      i += n + 1
    }
  }

  return res
};

// @lc code=end

