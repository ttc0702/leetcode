/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  return s.trim().split(' ').filter(item => item).reverse().join(' ')
}

// 利用指针实现 O(1) 的空间复杂度
// var reverseWords = function(s) {
//   s = s.trim()

//   const index = s.indexOf(' ')
//   if (index === -1) return s
  
//   let start
//   let blank = 0
//   for (let i = index; i < s.length; i++) {
//     if (s[i] === ' ') {
//       blank++
//     } else {
//       if (s[i - 1] === ' ') {
//         start = i
//       }
//       if (s[i + 1] === ' ' || !s[i + 1]) {
//         s = s.slice(start, i + 1) + ' ' + s.slice(0, start - blank) + s.slice(i + 1)
//         i -= blank - 1
//         blank = 0
//       }
//     }
//   }

//   return s
// };
// @lc code=end

