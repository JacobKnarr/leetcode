const { runTests } = require("./test/runners");
const {
    arrayToTree,
} = require("./trees/binary");

/**
 * @param {TreeNode} root The binary tree root node.
 * @param {number} targetSum The target sum to find within a path.
 * @return {boolean} True if a root-to-leaf tree path sums to the target, false otherwise.
 */
function hasPathSum(root, targetSum) {
    // Past leaf w/o reaching target sum
    if (!root) return false;

    // Find remaining amount to target sum
    targetSum -= root.val;

    // Leaf node, check if reached target sum
    if (!root.left && !root.right) {
        return targetSum === 0;
    }
    
    // Traverse
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

const tests = [
    {
        params: {
            root: arrayToTree([]),
            target: 0
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([1]),
            target: 1
        },
        output: true
    },
    {
        params: {
            root: arrayToTree([1,2]),
            target: 1
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([1,2,3]),
            target: 5
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,1]),
            target: 22
        },
        output: true
    }
];

runTests(tests, hasPathSum);