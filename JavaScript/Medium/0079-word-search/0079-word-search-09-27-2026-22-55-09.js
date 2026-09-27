/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (arr, str) {
    let m = arr.length
    let n = arr[0].length
    let ans = false

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(arr[i][j] === str[0]){
            traverse([i, j], 1)
            }
        }
    }

    function traverse(start, current) {
        let [x, y] = start
        if(current === str.length){
            ans = true;
            return
        }
        let og = arr[x][y]
        arr[x][y] = "#"
        if (y < n-1 && arr[x][y + 1] === str[current]) {
            traverse([x, y + 1], current + 1)
        }
        if (y > 0 && arr[x][y - 1] === str[current]) {
            traverse([x, y - 1], current + 1)
        }
        if (x < m-1 && arr[x + 1][y] === str[current]) {
            traverse([x + 1, y], current + 1)
        }
        if (x > 0 && arr[x - 1][y] === str[current]) {
            traverse([x - 1, y], current + 1)
        }
        arr[x][y] = og
    }

    return ans
};