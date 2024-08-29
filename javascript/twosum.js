const { runTests } = require("./test/runners");

/**
 * Find the indices of the two numbers that sum to the target
 * https://leetcode.com/problems/two-sum/description/
 * 
 * @param {number[]} nums The array of integers to use
 * @param {number} target The target sum for two integers
 * @return {number[]} The array of two indices of integers
 *                      from nums that sum to target
 */
function twoSum(nums, target) {
    const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const solutionIndex = indexMap.get(target - nums[i]);
        if (solutionIndex !== undefined) {
            return [solutionIndex, i];
        } 
        indexMap.set(nums[i], i);
    }

    return [0, 0];
};

const tests = [
    {
        params: {
            nums: [2,7,11,15],
            target: 9
        },
        output: [0,1]
    },
    {
        params: {
            nums: [3,2,4],
            target: 6
        },
        output: [1,2]
    },
    {
        params: {
            nums: [3,3],
            target: 6
        },
        output: [0,1]
    }
];

runTests(tests, twoSum);
