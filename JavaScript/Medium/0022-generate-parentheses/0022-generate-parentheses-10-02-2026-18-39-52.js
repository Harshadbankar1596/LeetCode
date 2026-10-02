/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let temp = []

    function track(root){
        if(root.length === n * 2){
            let str = isValid(root)
            if(str){
                temp.push(str)
            }
            return;
        };
        track(root + "(")
        track(root + ")")
    }

    track("(")

    return temp
};

var isValid = function (arr) {
    if(arr.length % 2 !== 0) return false;
    let temp = []
    let map = {
        "(" : ")"
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            temp.push(arr[i])
        } else {
            let pre = map[temp.pop()]
            if(pre !== arr[i]) return false
        }
    }
    if(temp.length) return false
    return arr;
};