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

function runTests() {
    const tests = [
        {
            input: "()",
            output: true
        },
        {
            input: "()[]{}",
            output: true
        },
        {
            input: "(]",
            output: false
        }
    ];


    for (const test of tests) {
        const output = isValid(test.input);

        console.log(test.output === output ? "success" : "failure");
    }
}

runTests();