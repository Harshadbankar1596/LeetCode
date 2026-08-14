/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (arr, k) {
    let l = arr.length;
    k = k % l;
    let temp = []
    for (let i = l - k; i < l; i++) {
        temp.push(arr[i])
    }
    for (let i = 0; i < l - k; i++) {
        temp.push(arr[i])
    }


    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }

    return arr
};