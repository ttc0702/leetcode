/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.nodes = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let nodes = this.nodes
  for (const ch of word) {
    if (!nodes[ch]) {
      nodes[ch] = {}
    }
    nodes = nodes[ch]
  }
  nodes.isEnd = true
};

Trie.prototype.searchPrefix = function (word) {
  let nodes = this.nodes
  for (const ch of word) {
    if (!nodes[ch]) {
      return false
    }
    nodes = nodes[ch]
  }
  return nodes
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const res = this.searchPrefix(word)
  return res === false ? false : res.isEnd === true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const res = this.searchPrefix(prefix)
  return res === false ? false : true
};


// var Trie = function() {
//   this.words = []
//   this.prefixs = []
// };
// Trie.prototype.insert = function(word) {
//   this.words.push(word)
//   for (let i = 1; i <= word.length; i++) {
//     const prefix = word.slice(0, i)
//     if (this.prefixs.indexOf(prefix) === -1) {
//       this.prefixs.push(prefix)
//     }
//   }
// };
// Trie.prototype.search = function(word) {
//   return this.words.indexOf(word) !== -1
// };
// Trie.prototype.startsWith = function(prefix) {
//   return this.prefixs.indexOf(prefix) !== -1
// };

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

