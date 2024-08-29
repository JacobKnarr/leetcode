const { runTests } = require("./test/runners");

/**
 * Given a sorted array of distinct integers and a target value,
 * return the index of either, where the target is found,
 * or where it would be if inserted in order.
 * https://leetcode.com/problems/search-insert-position/description/
 * 
 * @param {number[]} nums The sorted array of distinct integers
 * @param {number} target The target value to find insertion point for
 * @return {number} The index of the target value or its insertion point
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    

    return left;
};

function searchInsertRecusive(nums, target) {

    const recurse = (left, right) => {
        if (left > right) {
            return left;
        }

        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            return recurse(middle + 1, right);
        } else {
            return recurse(left, middle - 1);
        }
    };

    return recurse(0, nums.length-1);
};


const tests = [
    {
        params: {
            nums: [1,3,5,6],
            target: 5
        },
        output: 2
    },
    {
        params: {
            nums: [1,3,5,6],
            target: 2
        },
        output: 1
    },
    {
        params: {
            nums: [1,3,5,6],
            target: 7
        },
        output: 4
    }
];


runTests(tests, searchInsert);
runTests(tests, searchInsertRecusive);