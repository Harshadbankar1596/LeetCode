/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(arr) {
    arr = arr.sort((a,b) => b-a)
    while(arr.length > 1){
        let temp = arr.shift() - arr.shift()
        if(temp){
            arr.unshift(temp)
            let f = 0;
            while(arr[f] < arr[f+1] && f < arr.length){
                let pre = arr[f]
                arr[f] = arr[f+1]
                arr[f+1]  = pre
                f++;
            }
        }
    }

    if(arr.length){
        return arr[0]
    }else{
        return 0
    }
};