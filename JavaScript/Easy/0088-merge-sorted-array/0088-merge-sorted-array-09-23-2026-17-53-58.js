/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let temp = []

    let i = 0
    let j = 0
    while ((i < m) && (j < n)) {
        console.log(nums1[i] , nums2[j])
        console.log((i < m) && (j < n))
        if (nums1[i] < nums2[j]) {
            temp.push(nums1[i++])
        } else {
            temp.push(nums2[j++])
        }
    }

    while (i < m) {
        temp.push(nums1[i++])
    }
    while (j < n) {
        temp.push(nums2[j++])
    }
    for (let k = 0; k < temp.length; k++) {
        nums1[k] = temp[k]
    }

    return temp
};