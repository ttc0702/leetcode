/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

var ListNode = function (value) {
  // 节点中的 key 在被删除时需要用到
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
  this.times = 0
}

var LFUCache = function(capacity) {
  this.capacity = capacity
  this.count = 0
  this.hash = {}
  this.heads = []
  this.dummyHead = new ListNode()
  this.dummyTail = new ListNode()
  this.dummyHead.next = this.dummyTail
  this.dummyTail.prev = this.dummyHead
  this.heads[0] = this.dummyTail
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const node = this.hash[key]
  if (!node) return -1
  this.visit(node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return null
  
  let node = this.hash[key]
  if (!node) {
    if (this.count === this.capacity) {
      this.removeItem()
    }
    const newNode = new ListNode(value)
    this.hash[key] = newNode
    this.addToHead(newNode, 0)
    this.heads[0] = newNode
    this.count++
  } else {
    node.value = value
    this.visit(node)
  }
};

LFUCache.prototype.visit = function (node) {
  let times = node.times
  // 访问每段队头的元素
  if (node === this.heads[times]) {
    if (node.next.times === times) {
      this.heads[times] = node.next
    } else {
      delete this.heads[times]
    }
    node.times++
    times++
    if (this.heads[times]) {
      this.moveToHead(node, times)
    }
    this.heads[times] = node
  } else {
    // 访问每段队中的元素
    node.times++
    times++
    if (this.heads[times]) {
      this.moveToHead(node, times)
    } else {
      this.moveToHead(node, times - 1)
    }
    this.heads[times] = node
  }
}

LFUCache.prototype.moveToHead = function(node, times) {
  this.removeFromList(node)
  this.addToHead(node, times)
};

LFUCache.prototype.removeFromList = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
};

LFUCache.prototype.addToHead = function (node, times) {
  const head = this.heads[times]
  node.prev = head.prev
  node.next = head
  head.prev.next = node
  head.prev = node
};

LFUCache.prototype.removeItem = function() {
  const tail = this.dummyTail.prev
  const times = tail.times
  if (tail === this.heads[times]) {
    if (times === 0) {
      this.heads[0] = this.dummyTail
    } else {
      delete this.heads[times]
    }
  }
  this.removeFromList(tail)
  delete this.hash[tail.key]
  this.count--
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

