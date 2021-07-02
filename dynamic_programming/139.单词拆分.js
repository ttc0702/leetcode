/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// hashmap + dfs（执行超时）
// var wordBreak = function (s, wordDict) {
//   let hash = {}
//   wordDict.forEach(item => {
//     for (let i = 0; i < s.length - item.length + 1; i++) {
//       if (s.slice(i, i + item.length) === item) {      
//         if (!hash[i]) {
//           hash[i] = [item]
//         } else {
//           hash[i].push(item)
//         }
//       }
//     }
//   })

//   let flag = false
//   function search(index) {
//     if (index === s.length) {
//       flag = true
//     }
//     if (hash[index]) {
//       hash[index].forEach(item => search(index + item.length))
//     }
//   }
//   search(0)

//   return flag
// };

// 动态规划
var wordBreak = function (s, wordDict) {
  // 用 hashmap，按尾部字母存储 word，使后面判断以 s[i] 结尾的字符串时，不用遍历 0-s[i] 来切割，用空间换时间
  let hash = {}
  wordDict.forEach(word => {
    const last = word[word.length - 1]
    if (!hash[last]) {
      hash[last] = [word]
    } else {
      hash[last].push(word)
    }
  })

  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) continue
    for (let word of hash[s[i]]) {
      if (i < word.length - 1) continue
      const target = s.slice(i - word.length + 1, i + 1)
      if (word === target && dp[i - word.length + 1]) {
        dp[i + 1] = true
        break
      }
    }
  }

  return dp[s.length]
};
// @lc code=end

