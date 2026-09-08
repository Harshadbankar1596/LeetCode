/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n < 1000) return 0;
    let count = n - 1000
    return count + 1
};