
var SmallestInfiniteSet = function () {
    this.heap = new Set()
    this.current = 1
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {

    if (!this.heap.size) {
        return this.current++
    } else {
        let min = +Infinity
        for (let val of this.heap) {
            if (val < min) {
                min = val
            }
        }
        this.heap.delete(min)
        return min
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if(num < this.current && !this.heap.has(num)){
        this.heap.add(num)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */