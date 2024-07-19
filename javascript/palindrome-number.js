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

function runTests() {
    const tests = [
        {
            input: 121,
            output: true
        },
        {
            input: -121,
            output: false
        },
        {
            input: 10,
            output: false
        }
    ];


    for (const test of tests) {
        const output = isPalindrome(test.input);

        if (
            test.output === output
        ) {
            console.log("success");
        } else {
            console.log("fail");
        }
    }
}

runTests();