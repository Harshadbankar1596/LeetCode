/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let temp = []

    function track(root , start , sum){
        if(sum === n && root.length === k){
            temp.push([...root])
        }if(sum > n || root.length > k) return;

        for(let i = start ; i <= 9 ; i++){
            root.push(i)
            sum += i
            track(root , i + 1 , sum)
            sum -= root.pop()
        }
    }

    track([] , 1 , 0)

    return temp
};