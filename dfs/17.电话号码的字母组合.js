/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

// 两层循环
// var letterCombinations = function (digits) {
//   if (digits.length === 0) return []
  
//   const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//   let preRes = res = map[digits[0]].split('')
  
//   digits = digits.slice(1, digits.length)
//   while (digits.length > 0) {
//     res = []
//     for (let str of preRes) {
//       for (let m of map[digits[0]]) {
//         res.push(str.concat(m))
//       }
//     }
//     preRes = res
//     digits = digits.slice(1, digits.length)
//   }

//   return res
// };

// 回溯
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  
  const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = []

  function backtrack(str) {
    const len = str.length
    if (len === digits.length) {
      res.push(str)
      return
    }

    for (let m of map[digits[len]]) {
      backtrack(str.concat(m))
    }
  }

  backtrack('')

  return res
};
// @lc code=end

