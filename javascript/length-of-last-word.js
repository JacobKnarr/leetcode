const { runTests } = require("./test/runners");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
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