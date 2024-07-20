/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let index = s.length;
    let last = null;
    let total = 0;

    while(index--) {
        switch(s[index]) {
            case 'I':
                if (last === 'V' || last === 'X') {
                    total--;
                } else {
                    total++;
                }
                break;
            case 'V':
                total += 5;
                break;
            case 'X':
                if (last === 'L' || last === 'C') {
                    total -= 10;
                } else {
                    total += 10;
                }
                break;
            case 'L':
                total += 50;
                break;
            case 'C':
                if (last === 'D' || last === 'M') {
                    total -= 100;
                } else {
                    total += 100;
                }
                break;
            case 'D':
                total += 500;
                break;
            case 'M':
                total += 1000;
                break;
            default:
                throw new Error("Invalid Roman Numeral");
        }

        last = s[index];
    }

    return total;
};


function runTests() {
    const tests = [
        {
            input: "III",
            output: 3
        },
        {
            input: "LVIII",
            output: 58
        },
        {
            input: "MCMXCIV",
            output: 1994
        }
    ];


    for (const test of tests) {
        const output = romanToInt(test.input);

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