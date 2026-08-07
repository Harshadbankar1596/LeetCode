/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (arr) {
    if(!arr) return 0;
    let m = arr.length
    let n = arr[0].length

    let stack = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 1) {
                stack.push([i, j])
            }
        }
    }


    let count = 0
    let temp = []

    while (stack.length) {
        let [x, y] = stack.shift()
        if (arr[x][y] == 0) {
            continue;
        }

        temp.push([x, y])

        while (temp.length) {
            let [i, j] = temp.shift()

            arr[i][j] = 0;

            if (i - 1 >= 0 && arr[i - 1][j] == 1) {
                temp.push([i - 1, j])
                arr[i - 1][j] = 0
            }
            if (i + 1 < m && arr[i + 1][j] == 1) {
                temp.push([i + 1, j])
                arr[i + 1][j] = 0
            }
            if (j - 1 >= 0 && arr[i][j - 1] == 1) {
                temp.push([i, j - 1])
                arr[i][j - 1] = 0
            }
            if (j + 1 < n && arr[i][j + 1] == 1) {
                temp.push([i, j + 1])
                arr[i][j + 1] = 0
            }
        }

        count++

    }

    return count
};