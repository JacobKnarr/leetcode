const { runTests } = require("./test/runners");

/**
 * Determine if an integer is a palindrome.
 * https://leetcode.com/problems/two-sum/description/
 * 
 * @param {number} x The number to validate
 * @return {boolean} True if x is a palidrome, false otherwise.
 */
function isPalindrome(x) {
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

function isPalindromeToString(x) {
    const inputStr = x.toString();
    let start = 0;
    let end = inputStr.length - 1;

    while (start < end) {
        if (inputStr.charAt(start) != inputStr.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

function isPalindromeToStringSimple(x) {
    return x === +x.toString().split("").reverse().join("");
}


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
runTests(tests, isPalindromeToString);
runTests(tests, isPalindromeToStringSimple);