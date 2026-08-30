/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(arr) {
    let ans = []

    let m = arr.length-1
    let n = arr[0].length-1

    for(let i = 0 ; i<=n ; i++){
        let temp = []
        for(let j = m ; j >= 0 ; j--){
            temp.push(arr[j][i])
        }
        ans.push(temp)
    }

    for(let i = 0 ; i < ans.length ; i++){
        arr[i] = ans[i]
    }
};