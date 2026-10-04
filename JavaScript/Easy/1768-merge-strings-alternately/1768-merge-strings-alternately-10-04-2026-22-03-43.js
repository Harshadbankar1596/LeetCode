/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (arr1, arr2) {
    let str = ""

    let i = 0
    let j = 0

    let count = 0

    while (i < arr1.length && j < arr2.length) {
        if (count % 2 === 0) {
            str += arr1[i++]
        } else {
            str += arr2[j++]
        }
        count++
    }

    while (i < arr1.length) {
        str += arr1[i++]
    }
    while (j < arr2.length) {
        str += arr2[j++]
    }

    return str
};