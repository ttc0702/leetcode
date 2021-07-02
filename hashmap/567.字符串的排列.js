/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// hashmap + 滑动窗口
var checkInclusion = function (s1, s2) {
  const len1 = s1.length,
    len2 = s2.length
  
  if (len2 < len1) return false
  
  let hash = {}

  for (let char of s1) {
    if (!hash[char]) {
      hash[char] = 1
    } else {
      hash[char]++
    }
  }

  let missing = len1
  // 注意这里不需要关注 s1 中不存在，而 s2 中存在的字母
  for (let i = 0; i < len1; i++) {
    const char = s2[i]
    if (hash[char] === undefined) continue
    
    if (hash[char] > 0) {
      missing--
    }
    hash[char]--
  }
  if (missing === 0) return true

  for (let i = 0; i < len2 - len1; i++) {
    if (hash[s2[i]] !== undefined) {
      if (hash[s2[i]] >= 0) {
        missing++
      }
      hash[s2[i]]++
    }
    if (hash[s2[i + len1]] !== undefined) {
      if (hash[s2[i + len1]] > 0) {
        missing--
      }
      hash[s2[i + len1]]--
    }

    if (missing === 0) return true
  }

  return false
};
// @lc code=end

