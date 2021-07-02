/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 中心扩展
// var longestPalindrome = function (s) {
//   let arr = []
//   for (let i = 0; i < s.length; i++) {
//     if (i === 0) {
//       arr.push(s[0])
//       if (s[0] === s[1]) {
//         arr.push(s.slice(0, 2))
//       }
//     } else {
//       let j = k = 1
//       while (s[i - j] && s[i - j] === s[i + j]) {
//         j++
//       }
//       if (j > 1) arr.push(s.slice(i - j + 1, i + j))
//       if (s[i] === s[i + 1]) {
//         arr.push(s.slice(i, i + 2))
//         while (s[i - k] && s[i - k] === s[i + k + 1]) {
//           k++
//         }
//         if (k > 1) arr.push(s.slice(i - k + 1, i + k + 1))
//       }
//     }
//   }

//   let maxLenStr = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > maxLenStr.length) {
//       maxLenStr = arr[i]
//     }
//   }

//   return maxLenStr
// };

// 中心扩展（不用数组保存所有回文串，优化空间复杂度）
var longestPalindrome = function (s) {
  let maxLenStr = s[0]
  for (let i = 0; i < s.length; i++) {
    let j = k = 1
    // 以单个字母为中心扩展
    while (s[i - j] && s[i - j] === s[i + j]) {
      j++
    }
    let str = s.slice(i - j + 1, i + j)
    if (str.length > maxLenStr.length) maxLenStr = str
    
    // 以两个字母为中心扩散
    if (s[i] === s[i + 1]) {
      str = s.slice(i, i + 2)
      if (str.length > maxLenStr.length) maxLenStr = str
      while (s[i - k] && s[i - k] === s[i + k + 1]) {
        k++
      }
      str = s.slice(i - k + 1, i + k + 1)
      if (str.length > maxLenStr.length) maxLenStr = str
    }
  }

  return maxLenStr
};
// @lc code=end

