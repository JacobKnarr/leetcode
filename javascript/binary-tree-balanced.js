const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * A height-balanced binary tree is a binary tree in which
 * the depth of the two subtrees of every node
 * never differs by more than one.
 * 
 * @param {TreeNode} root Tree root
 * @return {boolean} True if children trees are balanced, otherwise false
 */
function isBalanced(root) {
    if (!root) return true;

    let balanced = true;

    /**
     * @param {TreeNode} node Tree root
     * @return {number} The maximum depth of the tree
     */
    function depth(node) {
        if (!balanced || !node) return 0;

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        if (Math.abs(leftDepth - rightDepth) > 1) {
            balanced = false;
            return balanced;
        }

        return 1 + Math.max(leftDepth, rightDepth);
    };
    
    depth(root);

    return balanced;
};


const tests = [
    {
        params: {
            root: arrayToTree([])
        },
        output: true
    },
    {
        params: {
            root: arrayToTree([1])
        },
        output: true
    },
    {
        params: {
            root: arrayToTree([3,9,20,null,null,15,7])
        },
        output: true
    },
    {
        params: {
            root: arrayToTree([1,2,2,3,3,null,null,4,4])
        },
        output: false
    },
    {
        params: {
            root: arrayToTree([1,2,2,3,null,null,3,4,null,null,4])
        },
        output: false
    }
];

runTests(tests, isBalanced);