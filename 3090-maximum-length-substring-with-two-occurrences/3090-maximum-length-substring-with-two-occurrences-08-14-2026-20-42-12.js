/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let map = new Map()
    let i = 0;
    let j = 0;
    let max = 0

    while (j < s.length) {
        let current = s[j]
        map.set(current, (map.get(current) || 0) + 1)

        while (map.get(current) > 2) {
            map.set(s[i], (map.get(s[i]) || 1) - 1)
            i++;
        }
        max = Math.max(max, (Math.abs(j - i + 1)))
        j++;

    }

    return max
};