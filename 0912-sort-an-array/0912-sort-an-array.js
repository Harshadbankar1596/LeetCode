/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mearge(arr , f , l , mid){
        let i = f
        let j = mid + 1
        let temp = []
        while(i<=mid && j<=l){
            if(arr[i] < arr[j]){
                temp.push(arr[i++])
            }else{
                temp.push(arr[j++])
            }
        }

        while(i<=mid){
            temp.push(arr[i++])
        }
        while(j<=l){
            temp.push(arr[j++])
        }

        for(let k = 0 ; k < temp.length ; k++){
            arr[f++] = temp[k]
        }
    }


    function divide(arr , f , l){
        if(f>=l) return arr
        let mid = Math.floor((f+l)/2)
        divide(arr , f , mid)
        divide(arr , mid+1 , l)
        mearge(arr , f , l , mid)
    }

    divide(nums , 0 , nums.length-1)
    return nums
};