/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = []
  dfs(s, '', 4)
  return res
  
  function dfs(s, ip, left) {
    if (s.length > left * 3 || s.length < left) return
    if (!s.length && left === 0) {
      res.push(ip.slice(1))
    }
  
    // if (s[0] === '0' || s.length === 1) {
    //   dfs(s.slice(1), `${ip}.${s[0]}`, left - 1)
    // } else if (s.length === 2 || s.slice(0, 3) > 255) {
    //   dfs(s.slice(1), `${ip}.${s[0]}`, left - 1)
    //   dfs(s.slice(2), `${ip}.${s.slice(0, 2)}`, left - 1)
    // } else {
    //   dfs(s.slice(1), `${ip}.${s[0]}`, left - 1)
    //   dfs(s.slice(2), `${ip}.${s.slice(0, 2)}`, left - 1)
    //   dfs(s.slice(3), `${ip}.${s.slice(0, 3)}`, left - 1)
    // }
  
    dfs(s.slice(1), `${ip}.${s[0]}`, left - 1)
    if (s[0] !== '0') {
      if (s.length >= 2) {
        dfs(s.slice(2), `${ip}.${s.slice(0, 2)}`, left - 1)
      }
      if (s.length >= 3 && s.slice(0, 3) <= 255) {
        dfs(s.slice(3), `${ip}.${s.slice(0, 3)}`, left - 1)
      }
    }
  }
};

// @lc code=end

