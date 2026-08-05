/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function (n, k, arr) {


    let graph = Array.from({ length: n }, () => []);

    for (let [u, v] of arr) {
        graph[u].push(v);
    }

    let set = new Set([k]);
    let queue = [k];
    let front = 0;

    while (front < queue.length) {
        let current = queue[front++];

        for (let next of graph[current]) {
            if (!set.has(next)) {
                set.add(next);
                queue.push(next);
            }
        }
    }

    for (let [u, v] of arr) {
        if (!set.has(u) && set.has(v)) {
            return [...Array(n).keys()];
        }
    }

    let ans = [];

    for (let i = 0; i < n; i++) {
        if (!set.has(i)) {
            ans.push(i);
        }
    }

    return ans;

};