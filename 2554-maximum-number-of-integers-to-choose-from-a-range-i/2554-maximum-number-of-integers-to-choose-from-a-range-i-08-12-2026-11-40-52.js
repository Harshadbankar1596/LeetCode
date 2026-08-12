/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let set = new Set(banned)


    let count = 0
    let sum = 0
    for(let i = 1 ; i <= n ; i++){
        if(set.has(i)){
            continue;
        }else{
            sum+=i
            if(sum > maxSum ){
                sum-=i
            }else{
                count++
            }
        }
    }

    return count
};