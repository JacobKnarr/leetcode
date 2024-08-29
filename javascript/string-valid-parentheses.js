const { runTests } = require("./test/runners");

/**
 * Determine if the input string of parentheses is valid.
 * https://leetcode.com/problems/valid-parentheses/description/
 * 
 * @param {string} s The string of parentheses to validate\
 * @return {boolean} True if parentheses are valid, false otherwise.
 */
function isValid(s) {
    if (!s || s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const bracket of s) {
        if (bracket in brackets) {
            stack.push(brackets[bracket]);
        } else if (stack.pop() !== bracket) {
            return false;
        }
    }

    return stack.length === 0;
};

const tests = [
    {
        params: {
            input: "()"
        },
        output: true
    },
    {
        params: {
            input: "()[]{}"
        },
        output: true
    },
    {
        params: {
            input: "(]"
        },
        output: false
    }
];

runTests(tests, isValid);