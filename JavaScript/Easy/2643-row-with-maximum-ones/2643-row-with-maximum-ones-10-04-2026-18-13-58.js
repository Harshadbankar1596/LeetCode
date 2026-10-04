/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(arr) {
    let max = 0
    let index = 0

    let m = arr.length-1
    let n = arr[0].length-1

    for(let i = 0 ; i <= m ; i++){
        let count = 0
        for(let j = n ; j >= 0 ; j--){
            if(arr[i][j] === 1){
                count++
            }
            if(max < count){
                max = count
                index = i
            }
        }
    }

    return [index , max]
};