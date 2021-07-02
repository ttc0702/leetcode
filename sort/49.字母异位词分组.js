/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = {}
  for (let str of strs) {
    const arr = Array.from(str)
    arr.sort()
    const key = arr.toString()

    if (!hash[key]) {
      hash[key] = [str]
    } else {
      hash[key].push(str)
    }
  }

  return Object.values(hash)
};
// @lc code=end

