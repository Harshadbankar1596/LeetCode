/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = [...s];

    function reverse(f, l) {
        while (f < l) {
            let temp = s[f];
            s[f] = s[l];
            s[l] = temp;
            f++;
            l--;
        }
    }

    for (let i = 0; i < s.length; i += 2 * k) {
        reverse(i, Math.min(i + k - 1, s.length - 1));
    }

    return s.join("");
};