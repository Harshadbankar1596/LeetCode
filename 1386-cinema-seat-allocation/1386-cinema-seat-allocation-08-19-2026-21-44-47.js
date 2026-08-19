/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let map = new Map()

    for (let [col, row] of reservedSeats) {
        if (!map.get(col)) {
            map.set(col, new Set())
        }
        map.set(col, map.get(col).add(row))
    }

    let count = (n - map.size) * 2
    for (let [i, seats] of map) {

        let left = true
        for (let j = 2; j <= 5; j++) {
            if (seats.has(j)) {
                left = false
                break
            }
        }
        let mid = true
        for (let j = 4; j <= 7; j++) {
            if (seats.has(j)) {
                mid = false
                break
            }
        }

        let right = true
        for (let j = 6; j <= 9; j++) {
            if (seats.has(j)) {
                right = false
                break
            }
        }

        if (left && right) {
            count += 2
        }
        else if (left || right) {
            count += 1
        }
        else if (mid) {
            count += 1
        }

    }
    return count
};