/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    function getSqrt([x , y]){
        return x ** 2 + y ** 2
    }

    let temp = []

    for(let i = 0 ; i < points.length ; i++){
        temp.push(points[i])

        let l = temp.length-1

        while(l > 0 && getSqrt(temp[l]) < getSqrt(temp[l-1])){
            let pre = temp[l]
            temp[l] = temp[l-1]
            temp[l-1] = pre
            l--
        }

        while(k < temp.length){
            temp.pop()
        }
    }


    return temp
 
};