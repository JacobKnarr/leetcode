const { runTests } = require("./test/runners"); 

/**
 * Determine the number of ways to climb n stair in steps of 1 and/or 2.
 * https://leetcode.com/problems/climbing-stairs/description/
 * 
 * @param {number} n The number of stairs
 * @return {number} The number of ways to climb the stairs
 */
function climbStairs(n) {
    const cache = new Array(n+1).fill(-1);
    cache[0] = 0;
    cache[1] = 1;
    cache[2] = 2;
    return climbStairsHelper(n, cache);
};

function climbStairsHelper(n, cache) {
    if (cache[n] !== -1) return cache[n];

    cache[n] = climbStairsHelper(n-1, cache) + climbStairsHelper(n-2, cache);

    return cache[n];
}


const tests = [
    {
        params: {
            input: 2
        },
        output: 2
    },
    {
        params: {
            input: 3
        },
        output: 3
    },
    {
        params: {
            input: 4
        },
        output: 5
    }
];

runTests(tests, climbStairs);