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


function runTests() {
    const tests = [
        {
            nums: [2,7,11,15],
            target: 9,
            result: [0,1]
        },
        {
            target: 6,
            nums: [3,2,4],
            result: [1,2]
        },
        {
            target: 6,
            nums: [3,3],
            result: [0,1]
        }
    ];


    for (const test of tests) {
        const result = twoSum(test.nums, test.target);

        if (
            test.result[0] == result[0] &&
            test.result[1] == result[1]
        ) {
            console.log("success");
        } else {
            console.log("fail");
        }
    }
}

runTests();
