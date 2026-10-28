/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kthFactor = function(n, k) {
    let temp = []
    for(let i = 1 ; i <= n ; i++){
        if(n % i === 0){
            temp.push(i)
        }
    }
    return temp[k-1] || -1
};
