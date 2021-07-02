/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 双指针（超出时间限制，通过 265/266，基本可用）
// var minWindow = function (s, t) {
//   let exist = []
//   let indexs = []
//   let times = {}
//   for (let i = 0; i < t.length; i++) {
//     if (!times[t[i]]) {
//       times[t[i]] = 1
//     } else {
//       times[t[i]]++
//     }
//   }

//   let start, min
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]
//     if (times[char] === undefined) continue

//     if (exist.indexOf(char) === -1) {
//       if (!exist.length) start = i
//       times[char]--
//     } else {
//       if (times[char] === 0) {
//         if (char === s[start]) {
//           start = indexs[1] || i
//           if (exist.length === t.length && i - start + 1 < min.length) {
//             min = s.slice(start, i + 1)
//           }
//         }

//         const idx = exist.indexOf(char)
//         exist.splice(idx, 1)
//         indexs.splice(idx, 1)
//       } else {
//         times[char]--
//       }
//     }
//     exist.push(char)
//     indexs[indexs.length] = i
//     if (exist.length === t.length && !min) min = s.slice(start, i + 1)
//   }

//   return min || ''
// };

// 滑动窗口：双指针，一个做加法，一个做减法
var minWindow = function (s, t) {
  let times = {}
  let missing = t.length
  for (let i = 0; i < t.length; i++) {
    if (!times[t[i]]) {
      times[t[i]] = 1
    } else {
      times[t[i]]++
    }
  }

  let L = 0
  let min = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (times[char] > 0) {
      times[char]--
      missing--
    } else if (times[char] <= 0) {
      times[char]--
    }
    if (missing === 0 && !min) {
      min = s.slice(L, i + 1)
      if (min.length === t.length) return min
    }

    while (missing === 0 && L <= i) {
      const left = s[L]
      if (times[left] < 0) {
        times[left]++
      } else if (times[left] === 0) {
        times[left]++
        missing++
        if (i - L + 1 < min.length) min = s.slice(L, i + 1)
      }
      L++
    }
  }

  return min
}
// @lc code=end

