/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = path.split("/")
    
    let stack = []

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === ".."){
            stack.pop()
        }else if(arr[i] === "" || arr[i] === "."){
            continue
        }else{
            stack.push(arr[i])
        }
    }

    if(!stack.length) return "/"
    stack.unshift("")

    return stack.join("/")
};