const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * @param {TreeNode} root Tree root
 * @return {boolean} True if children trees are symmetric, otherwise false
 */
var isSymmetric = function(root) {
    if (!root) return false;

    return isSymmetricHelper(root.left, root.right);
};

/**
 * @param {TreeNode} p Tree root 1
 * @param {TreeNode} q Tree root 2
 * @return {boolean} True if trees symmetric, otherwise false
 */
function isSymmetricHelper(p, q) {
    // matching leaf
    if (!p && !q) return true;

    // matching node
    if (p && q && p.val === q.val) {
        return isSymmetricHelper(p.left, q.right) && isSymmetricHelper(p.right, q.left);
    }

    // non-matching node
    // (!p && q || p && !q || p.val !== q.val)
    return false;
};

const tests = [
    {
        params: {
            root: arrayToTree([])
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([1,2,2,3,4,4,3])
        },
        output: true
    },
    {
        params: {
            root: arrayToTree([1,2,2,null,3,null,3])
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([1,2,2,null,3,3])
        },
        output: true
    }
];

runTests(tests, isSymmetric);