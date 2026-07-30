/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let ans = [];
    let temp = [];
    let level = 0;
    let stack = [[root, level]];
    function traverse(root) {
        if (!root[0]) return;
        level = root[1];
        if (ans.length !== level) {
            // console.log("temp => " , temp)
            ans.push(temp);
            temp = [];
            temp.push(root[0].val);
        } else {
            temp.push(root[0].val);
        }

        // ans.push(root[0].val)
        stack.push([root[0].left, root[1] + 1]);
        stack.push([root[0].right, root[1] + 1]);
        traverse(stack.shift());
        traverse(stack.shift());
    }

    traverse(stack.shift());
    ans.push(temp);
    return ans;
};