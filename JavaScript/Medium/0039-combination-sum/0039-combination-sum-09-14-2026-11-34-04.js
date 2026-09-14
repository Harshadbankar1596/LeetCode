/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (arr, target) {
    let temp = []
    let set = new Set()

    function track(root, sum) {
        if (sum >= target) {
            if (sum > target) return;
            let str = new Array(9).fill(0)
            for (let i = 0; i < root.length; i++) {
                str[root[i]] += 1
            }
            let s = str.toString()
            if (!set.has(s)) {
                temp.push([...root])
                set.add(s)
            }
        }

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            root.push(arr[i])
            track(root, sum)
            sum -= root.pop()
        }
    }

    track([], 0)

    return temp
};