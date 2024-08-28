const { runTests } = require("./test/runners");

/**
 * @param {string} s The string to verify.
 * @return {boolean} True if the string s is a palindrome, false otherwise.
 */
function isValid(s) {
    if (!s) return false;

    const filtered = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g, "");

    let left = 0;
    let right = filtered.length - 1;

    while (left < right) {
        if (filtered[left++] !== filtered[right--]) return false;
    }

    return true;
};

const tests = [
    {
        params: {
            input: "a"
        },
        output: true
    },
    {
        params: {
            input: "ab"
        },
        output: false
    },
    {
        params: {
            input: "& a %"
        },
        output: true
    },
    {
        params: {
            input: "A man, a plan, a canal: Panama"
        },
        output: true
    },
    {
        params: {
            input: "race a car"
        },
        output: false
    },
    {
        params: {
            input: " "
        },
        output: true
    }    
];

runTests(tests, isValid);