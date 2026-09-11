/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    const temp = new Set();

    function track(root, used) {
        if (root.length === 3) {
            if (Number(root) % 2 === 0) {
                temp.add(root);
            }
            return;
        }

        for (let i = 0; i < digits.length; i++) {
            if (used.has(i)) continue;

            if (root.length === 0 && digits[i] === 0) continue;

            used.add(i);
            track(root + digits[i], used);      
            used.delete(i);
        }
    }

    track("", new Set());

    return temp.size;
};