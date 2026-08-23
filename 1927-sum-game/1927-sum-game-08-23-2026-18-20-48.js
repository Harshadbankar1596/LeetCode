/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
    let leftSum = 0
    let rightSum = 0
    let leftQ = 0
    let rightQ = 0

    let mid = Math.floor(num.length / 2)
    for (let i = 0; i < mid; i++) {
        if (num[i] === "?") {
            leftQ += 1
        } else {
            leftSum += Number(num[i])
        }
    }
    for (let i = mid; i < num.length; i++) {
        if (num[i] === "?") {
            rightQ += 1
        } else {
            rightSum += Number(num[i])
        }
    }

    if ((leftQ + rightQ) % 2 !== 0) {
    return true
}

return leftSum - rightSum !== 9 * (rightQ - leftQ) / 2
};