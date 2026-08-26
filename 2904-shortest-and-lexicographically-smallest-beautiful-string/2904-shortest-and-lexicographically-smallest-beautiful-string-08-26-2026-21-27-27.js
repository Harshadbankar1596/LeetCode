/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    let map = new Map()
    let temp = []

    let i = 0
    let j = 0

    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1)
        if (map.get("1") >= k) {
            store(i, j)
            while (
                s[i] === "0" ||
                (s[i] === "1" && map.get("1") > k)
            ) {
                if (s[i] === "1") {
                    map.set("1", map.get("1") - 1)
                }
                i++
            }
            store(i, j)
        }
        j++
    }

    function store(y, x) {
        let str = ""

        for (let p = y; p <= x; p++) {
            str += s[p]
        }

        temp.push(str)
    }

    if (!temp.length) {
        return ""
    }

    let ans = temp[0]

    for (let i = 1; i < temp.length; i++) {
        if (
            temp[i].length < ans.length ||
            (temp[i].length === ans.length && temp[i] < ans)
        ) {
            ans = temp[i]
        }
    }

    return ans
};