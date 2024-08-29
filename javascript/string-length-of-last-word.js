const { runTests } = require("./test/runners");

/**
 * Given a string consisting of words and spaces, determine the
 * length of the last word in said string.
 * https://leetcode.com/problems/length-of-last-word/description/
 * 
 * @param {string} s The string to check
 * @return {number} The length of the last word in the given string
 */
function lengthOfLastWord(s) {
    let count = 0;
    let position = s.length - 1;

    while (position >= 0) {
        const character = s[position--];
        if (character === " " && count !== 0) {
            break;
        } else if (character !== " ") {
            count++;
        }
    };

    return count;

    // return s.trim().split(" ").pop().length;
};

const tests = [
    {
        params: {
            input: "Hello World"
        },
        output: 5
    },
    {
        params: {
            input: "   fly me   to   the moon  "
        },
        output: 4
    },
    {
        params: {
            input: "luffy is still joyboy"
        },
        output: 6
    }
];

runTests(tests, lengthOfLastWord);