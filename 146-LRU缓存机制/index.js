/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.size = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.size) {
        // keys()返回迭代器，使用next() 顺序返回
        this.map.delete(this.map.keys().next().value);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */