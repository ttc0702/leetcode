/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 二维数组
// var convert = function (s, numRows) {
//   if(numRows === 1) return s
//   // 注意初始化二维数组不能写成下面的形式，这样会导致二维数组中的数组都指向同一个地址
//   // 使用 fill() 时注意保证数值为原始值
//   // let arrs = new Array(numRows).fill([])
//   let arrs = []
//   for (let i = 0; i < numRows; i++) {
//     arrs[i] = []
//   }

//   for (let i = 0; i < s.length; i++) {
//     const remainder = i % (numRows * 2 - 2)
//     if (remainder < numRows) {
//       arrs[remainder].push(s[i])
//     } else {
//       arrs[numRows - 1 - (remainder - numRows + 1)].push(s[i])
//     }
//   }

//   let res = ''
//   for (let arr of arrs) {
//     res = res.concat(arr.join(''))
//   }

//   return res
// };

// 用字符串代替二维数组，空间复杂度降为 O(numRows)
var convert = function (s, numRows) {
  if(numRows === 1) return s
  let arr = new Array(numRows).fill('')

  for (let i = 0; i < s.length; i++) {
    const remainder = i % (numRows * 2 - 2)
    if (remainder < numRows) {
      arr[remainder] = arr[remainder].concat(s[i])
    } else {
      const key = numRows - 1 - (remainder - numRows + 1)
      arr[key] = arr[key].concat(s[i])
    }
  }

  let res = ''
  for (let str of arr) {
    res = res.concat(str)
  }

  return res
};
// @lc code=end

