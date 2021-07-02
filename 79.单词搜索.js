/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// PASSED
var exist = function (board, word) {
  let chars = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const char = board[i][j]
      
      if (!chars[char]) {
        chars[char] = [[i, j]]
      } else {
        chars[char].push([i, j])
      }
    }
  }
  let arr = []
  for (let i = 0; i < word.length; i++) {
    if (chars[word[i]]) {
      arr[i] = chars[word[i]]
    } else {
      return false
    }
  }

  let flag = false

  function search(index, i) {
    if (index === arr.length - 1) {
      flag = true
      return
    }

    for (let j = 0; j < arr[index + 1].length; j++) {
      let prev = arr[index][i],
        next = arr[index + 1][j]
      if (next.length && (prev[0] === next[0] && Math.abs(prev[1] - next[1]) === 1) || (prev[1] === next[1] && Math.abs(prev[0] - next[0]) === 1)) {
        const pos = prev.slice()
        prev.splice(0, 2)
        search(index + 1, j)
        prev.push(...pos)
      }
    }

  }
  arr[0].forEach((item, i) => search(0, i))

  return flag
};
// @lc code=end

