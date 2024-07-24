const { runTests } = require("./test/runners");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // String Solution 1
    // const inputStr = x.toString();
    // let start = 0;
    // let end = inputStr.length - 1;


    // while (start < end) {
    //     if (inputStr.charAt(start) != inputStr.charAt(end)) {
    //         return false;
    //     }
    //     start++;
    //     end--;
    // }

    // return true;

    // String Solution 2
    // return x === +x.toString().split("").reverse().join("");

    // Number Solution
    let reverse = 0;
    let copy = x;

    while (copy > 0) {
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = copy / 10;
        copy = ~copy;
        copy = ~copy;
    }

    return reverse === x;
};


const tests = [
    {
        params: {
            input: 121
        },
        output: true
    },
    {
        params: {
            input: -121
        },
        output: false
    },
    {
        params: {
            input: 10
        },
        output: false
    }
];

runTests(tests, isPalindrome);