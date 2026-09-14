/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (arr, target) {
    let temp = []
    arr = arr.sort((a, b) => a - b)

    function track(sum, root, start) {
        if (sum === 0) {
            let newArray = [...root]
            temp.push(newArray)
        }
        if (sum < 0) return;

        for (let i = start; i < arr.length; i++) {
            if (arr[i] === arr[i - 1] && i > start) continue;
            root.push(arr[i])
            track(sum - arr[i], root, i + 1)
            root.pop()
        }
    }

    track(target, [], 0)

    return temp
};