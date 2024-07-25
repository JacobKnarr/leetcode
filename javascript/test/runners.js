/**
 * File containing test runners for generic test formats
 * 
 * - input, output(s)
 * - input, target, output(s)
 */

function runTests(tests, validator) {
    for (const test of tests) {
        const output = validator(...Object.values(test.params));

        if (verifyOutput(output, test.output)) {
            console.log("success");
        } else {
            console.log("fail");
        }
    }
}

function verifyOutput(output, expected) {
    if (Array.isArray(output)) {
        if (output.lenght !== expected.lenght) {
            return false;
        }
        
        for (let i = 0; i < output.length; i++) {
            if (output[i] !== expected[i]) {
                return false;
            }
        }
    } else if (output !== expected) {
        return false;
    }

    return true;
}

module.exports = {
    runTests
};