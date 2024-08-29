const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * Given the roots of two binary trees, determine if they are equal.
 * https://leetcode.com/problems/same-tree/description/
 * 
 * @param {TreeNode} p Tree root 1
 * @param {TreeNode} q Tree root 2
 * @return {boolean} True if trees are identical, otherwise false
 */
function isSameTree(p, q) {
    // matching leaf
    if (!p && !q) return true;

    // matching node
    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    // non-matching node
    // (!p && q || p && !q || p.val !== q.val)
    return false;
};

const tests = [
    {
        params: {
            p: arrayToTree([]),
            q: arrayToTree([])
        },
        output: true
    },
    {
        params: {
            p: arrayToTree([1,2,3]),
            q: arrayToTree([1,2,3])
        },
        output: true
    },
    {
        params: {
            p: arrayToTree([1,2]),
            q: arrayToTree([1,null,2])
        },
        output: false
    },
    {
        params: {
            p: arrayToTree([1,2,1]),
            p: arrayToTree([1,1,2])
        },
        output: false
    }
];

runTests(tests, isSameTree);