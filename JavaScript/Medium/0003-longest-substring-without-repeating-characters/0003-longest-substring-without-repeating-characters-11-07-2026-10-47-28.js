/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let temp = []
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i])
            temp.push(s[i])
        } else {
            while (set.has(s[i])) {
                set.delete(temp.shift())
            }
            set.add(s[i])
            temp.push(s[i])
        }
        max = Math.max(max, temp.length)
    }

    return max
};