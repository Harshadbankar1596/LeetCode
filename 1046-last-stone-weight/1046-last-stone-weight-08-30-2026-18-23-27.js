/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(arr) {
    arr = arr.sort((a,b) => a-b)
    while(arr.length > 1){
        let temp = arr.pop() - arr.pop()
        if(temp){
            arr.push(temp)
            let f = arr.length-1;
            while(arr[f] < arr[f-1] && f < arr.length){
                let pre = arr[f]
                arr[f] = arr[f-1]
                arr[f-1]  = pre
                f--;
            }
        }
    }

    if(arr.length){
        return arr[arr.length-1]
    }else{
        return 0
    }
};