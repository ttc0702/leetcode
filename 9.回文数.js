/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// 转为字符串
// var isPalindrome = function (x) {
//   if (x < 0) return false

//   const str = String(x)
//   const len = str.length
//   for (let i = 0; i < len - 1 - i; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false
//     }
//   }

//   return true
// };

// 翻转后一半的数字
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  
  let reversed = 0
  while (x > reversed) {
    reversed = reversed * 10 + x % 10
    x = Math.floor(x / 10)
  }

  return x === reversed || x === Math.floor(reversed / 10)
}
// @lc code=end

