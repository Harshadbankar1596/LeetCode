/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0
    let mul = 1
    let num = n

    while(num !== 0){
        let current = num % 10
        sum += current
        mul *= current
        num = Math.floor(num / 10)
    }

    return n % (sum+mul) === 0
};