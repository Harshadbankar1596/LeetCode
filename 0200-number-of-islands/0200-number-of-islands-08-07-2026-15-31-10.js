/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (arr) {
    if (!arr) return 0;
    let m = arr.length
    let n = arr[0].length
    let count = 0
    let temp = []

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (arr[x][y] == 0) {
                continue;
            }

            temp.push([x, y])
            arr[x][y] = 0;
            while (temp.length) {
                let [i, j] = temp.pop()
                // arr[i][j] = 0;


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
    }

    return count
};