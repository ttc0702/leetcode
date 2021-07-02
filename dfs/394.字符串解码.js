/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  function dps(str) {
    if (!str.includes('[')) {
      return str
    }
    let res = ''
    let num = ''
    for (let i = 0; i < str.length;) {
      if (!isNaN(str[i])) {
        num += str[i]
        if (!isNaN(str[i + 1])) {
          i++
        } else {
          let brackets = 1
          let start = i + 2,
            j = i + 2
          while (brackets) {
            if (str[j] === '[') {
              brackets++
            } else if (str[j] === ']') {
              brackets--
            }
            j++
          }
          let substr = dps(str.slice(start, j - 1))
          for (let k = 0; k < num; k++) {
            res += substr
          }
          i = j
          num = ''
        }
      } else {
        res += str[i]
        i++
      }
    }

    return res
  }

  return dps(s)
};
// @lc code=end

