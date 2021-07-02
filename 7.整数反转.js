/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 转换为字符串
// var reverse = function (x) {
//   const positive = x >= 0 ? true : false
//   const arr = String(Math.abs(x)).split('')
//   const res = Number(arr.reverse().join(''))
//   if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
//     return 0
//   } else {
//     return positive ? res : -(res)
//   }
// };

// 弹出 x 的末尾，推入 res 的头部
var reverse = function (x) {
  let res = 0
  while (x !== 0) {
    const digit = x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    res = res * 10 + digit
    if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
      return 0
    }
  }

  return res
};

// @lc code=end

