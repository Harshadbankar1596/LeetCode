/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;

    let set = new Set(nums)
    let count = 1

    for (const n of set) {
        if (!set.has(n - 1)) {
            let current = n
            let temp = 1
            while (set.has(current + 1)) {
                temp++
                current++
            }
            count = Math.max(temp, count)
        }
    }

    return count;
};