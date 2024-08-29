const { runTests } = require("./test/runners");
const {
    traversals,
    arrayToTree,
    treeToArray
} = require("./trees/binary");

/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 * 
 * @param {TreeNode} root The root node of the tree
 * @return {number[]} The array of node values representing the tree's ppreorder traversal
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