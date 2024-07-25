const { runTests } = require("./test/runners");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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