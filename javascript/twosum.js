const { runTests } = require("./test/runners");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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
