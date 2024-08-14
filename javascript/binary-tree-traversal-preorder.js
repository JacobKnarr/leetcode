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
        output: [1,2,3]
    },
    {
        params: {
            root: arrayToTree([5,4,7,3,null,2,null,-1,null,9])
        },
        output: [5,4,3,-1,7,2,9]
    },
    {
        params: {
            root: arrayToTree([1,2,3,4,5,6])
        },
        output: [1,2,4,5,3,6]
    }
];

runTests(tests, treeToArray.bind(null, traversals.PREORDER));