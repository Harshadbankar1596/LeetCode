/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0
    let fx = x
    while(x != 0){
        sum += x%10
        x = Math.floor(x/10)
    }
    console.log(sum , fx)
     return fx % sum === 0 ? sum : -1;
};
