const { runTests } = require("./test/runners");
const {
    traversals,
    arrayToTree,
    treeToArray
} = require("./trees/binary");

/**
 * Given the root of a binary tree, return the breadth-first search traversal of its nodes' values.
 * 
 * @param {TreeNode} root The root node of the tree
 * @return {number[]} The array of node values representing the tree's BFS traversal
 */

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