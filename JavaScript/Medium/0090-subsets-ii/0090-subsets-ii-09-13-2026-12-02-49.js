/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(arr) {
    let temp = []
    let set = new Set()
    arr = arr.sort((a,b) => a-b)

    function track(root , start){
        let str = ([...root]).toString() || " "
        if(!set.has(str)){
            temp.push([...root])
            set.add(str)
        }

        for(let i = start ; i < arr.length ; i++){
            root.push(arr[i])
            track(root , i + 1 )
            root.pop()
        }
    }


    track([] , 0)

    return temp
};