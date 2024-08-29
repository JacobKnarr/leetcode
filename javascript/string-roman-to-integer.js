const { runTests } = require("./test/runners");

/**
 * Convert a given roman numeral to its integer value.
 * https://leetcode.com/problems/roman-to-integer/description/
 * 
 * @param {string} s The roman numeral string
 * @return {number} The integer value of s
 */
function romanToInt(s) {
    let last = null;
    let current = null;
    let total = 0;

    const numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let index = s.length - 1; index >= 0; index--) {
        current = numerals[s[index]];

        if (current < last) {
            total -= current;
        } else {
            total += current;
        }

        last = current;
    }

    return total;
};

const tests = [
    {
        params: {
            input: "III"
        },
        output: 3
    },
    {
        params: {
            input: "LVIII"
        },
        output: 58
    },
    {
        params: {
            input: "MCMXCIV"
        },
        output: 1994
    }
];

runTests(tests, romanToInt);