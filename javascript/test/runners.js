/**
 * File containing test runners for generic test formats
 * 
 * - input, output(s)
 * - input, target, output(s)
 */

function runTests(tests, validator, converter = null) {
    for (const test of tests) {
        let output = validator(...Object.values(test.params));
        if (converter) {
            output = converter(output);
        }

        if (verifyOutput(output, test.output)) {
            console.log("success");
        } else {
            console.log("fail");
        }
    }
}

function verifyOutput(output, expected) {
    if (Array.isArray(output)) {
        if (output.length !== expected.length) {
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