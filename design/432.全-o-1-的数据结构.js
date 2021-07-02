/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

var ListNode = function (key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

var AllOne = function() {
  this.hash = {}
  this.heads = []
  this.tails = []
  this.dummuHead = new ListNode()
  this.dummyTail = new ListNode()
  this.dummyHead.next = this.dummyTail
  this.dummyTail.prev = this.dummyHead
  this.heads[1] = this.dummyTail
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  const node = this.hash[key]
  if (!node) {
    const newNode = new ListNode(key, 1)
    this.hash[key] = newNode
    this.addToHead(node, 1)
    this.heads[1] = newNode
  } else {
    node.value++
    this.operate(node, true)
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  const node = this.hash[key]
  if (node) {
    if (node.value === 1) {
      this.removeItem(node)
    } else {
      node.value--
      this.operate(node, false)
    }
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  return this.dummyHead.next.key
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  return this.dummyTail.prev.key
};

AllOne.prototype.operate = function(node, inc) {
  
};

AllOne.prototype.moveToHead = function(node, times) {
  
};

AllOne.prototype.moveToTail = function(node, times) {
  
};

AllOne.prototype.removeFromList = function(node) {
  
};

AllOne.prototype.addToHead = function(node, times) {
  
};

AllOne.prototype.removeItem = function(node) {
  const value = node.value
  if (node === this.heads[value]) {
    if (value === 1) {
      this.heads[1] = this.dummyTail
    } else {
      delete this.heads[value]
    }
  }

  this.removeFromList(node)

};



/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end

