/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n < 1000) return 0;
    let count = 0
    // let temp = []
    for(let i = 1000 ; i <= n ; i++){
        // temp.push(i)
        count++
    }
    return count;
};