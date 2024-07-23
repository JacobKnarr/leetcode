/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
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

const searchInsertRecusive = (nums, target) => {

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
        target: 5,
        nums: [1,3,5,6],
        result: 2
    },
    {
        target: 2,
        nums: [1,3,5,6],
        result: 1
    },
    {
        target: 7,
        nums: [1,3,5,6],
        result: 4
    }
];

function runTests(validator) {
    for (const test of tests) {
        const result = validator(test.nums, test.target);

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

runTests(searchInsert);
runTests(searchInsertRecusive);