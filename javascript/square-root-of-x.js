const { runTests } = require("./test/runners");

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x;

    let start = 1;
    let end = x;

    while (start <= end) {
        let root = Math.floor((start + end) / 2);

        if (root * root > x) {
            end = root - 1;
        } else if (root * root == x) {
            return root;
        } else {
            start = root + 1;
        }
    }

    return end;
};

const tests = [
    {
        params: {
            input: 4
        },
        output: 2
    },
    {
        params: {
            input: 8
        },
        output: 2
    },
    {
        params: {
            input: 6
        },
        output: 2
    }
];

runTests(tests, mySqrt);