/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 与 76 类似
// hashmap + 暴力
// var findAnagrams = function(s, p) {
//   let sLen = s.length,
//     pLen = p.length

//   if (sLen < pLen) return []

//   let hash = {}
//   for (let char of p) {
//     if (!hash[char]) {
//       hash[char] = 1
//     } else {
//       hash[char]++
//     }
//   }

//   let res = []
//   for (let i = 0; i < sLen - pLen + 1; i++) {
//     let hashCopy = Object.assign({}, hash)
//     for (let j = i; j < i + pLen; j++) {
//       const char = s[j]
//       hashCopy[char]--
//       if (hashCopy[char] < 0) continue
//     }
//     if (Object.values(hashCopy).filter(item => item !== 0).length === 0) {
//       res.push(i)
//     }
//   }

//   return res
// };

// hashmap + 滑动窗口
var findAnagrams = function (s, p) {
  let sLen = s.length,
    pLen = p.length

  if (sLen < pLen) return []

  let hash = {}
  for (let char of p) {
    if (!hash[char]) {
      hash[char] = 1
    } else {
      hash[char]++
    }
  }

  let res = []
  let missing = pLen
  for (let i = 0; i < pLen; i++) {
    hash[s[i]]--
    if (hash[s[i]] >= 0) {
      missing--
    }
  }
  if (missing === 0) {
    res.push(0)
  }
  for (let i = 1; i < sLen - pLen + 1; i++) {
    hash[s[i - 1]]++
    if (hash[s[i - 1]] > 0) {
      missing++
    }
    hash[s[i + pLen - 1]]--
    if (hash[s[i + pLen - 1]] >= 0) {
      missing--
    }
    if (missing === 0) {
      res.push(i)
    }
  }

  return res
}
// @lc code=end

