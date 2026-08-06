/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while(n){
        let x = n
        let sum = 1
        while(x){
            sum *= x % 10
            x = Math.floor(x/10)
        }
        if(sum % t === 0){
            break;
        }else{
            n++
        }
    }

    return n
};