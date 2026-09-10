/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let temp = []

    function track(root , start){
        if(root.length === k){
            temp.push([...root])
            return
        }

        for(let i = start ; i <= n ; i++){
            root.push(i)
            track(root , i + 1)
            root.pop()
        }
    }

    track([] , 1)
    return temp
};