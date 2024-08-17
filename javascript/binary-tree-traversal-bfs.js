const { runTests } = require("./test/runners");
const {
    traversals,
    arrayToTree,
    treeToArray
} = require("./trees/binary");

const tests = [
    {
        params: {
            root: arrayToTree([])
        },
        output: []
    },
    {
        params: {
            root: arrayToTree([1])
        },
        output: [1]
    },
    {
        params: {
            root: arrayToTree([1,null,2,3])
        },
        output: [1,null,2,3]
    },
    {
        params: {
            root: arrayToTree([0,-3,9,-10,null,5])
        },
        output: [0,-3,9,-10,null,5]
    },
    {
        params: {
            root: arrayToTree([1,2,3,4,5,6])
        },
        output: [1,2,3,4,5,6]
    }
];

runTests(tests, treeToArray.bind(null, traversals.BFS));