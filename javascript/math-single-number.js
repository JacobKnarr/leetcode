const { runTests } = require("./test/runners");

/**
 * Given a non-empty array of integers, find the element that only appears once.
 * https://leetcode.com/problems/single-number/ 
 * 
 * @param {number[]} nums The non-empty array of integers to search
 * @return {number} The number that only appears once in nums
 */
function singleNumber(nums) {
    let result = 0; 

    for (let num of nums) {
        result ^= num;
    }
    
    return result
}


function singleNumberMap(nums) {
    const numberMap = new Map();

    for (const num of nums) {
        numberMap.set(num, (numberMap.get(num) || 0) + 1);
    }

    for (const [key, value] of numberMap.entries()) {
        if (value === 1) {
            return key;
        }
    }

    return null;
};

const tests = [
    {
        params: {
            nums: [1]
        },
        output: 1
    },
    {
        params: {
            nums: [2,2,1]
        },
        output: 1
    },
    {
        params: {
            nums: [4,1,2,1,2]
        },
        output: 4
    }
];

runTests(tests, singleNumber);
runTests(tests, singleNumberMap);
