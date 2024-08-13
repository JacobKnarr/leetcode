const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * @param {TreeNode} root Tree root
 * @return {number} The maximum depth of the tree
 */
function maxDepthRecursive(root) {
    if (!root) return 0;

    const leftDepth = maxDepthRecursive(root.left);
    const rightDepth = maxDepthRecursive(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};

/**
 * @param {TreeNode} root Tree root
 * @return {number} The maximum depth of the tree
 */
function maxDepthIterative(root) {
    if (!root) return 0;

    let depth = 0;
    const nodes = [root];

    // Walk through nodes (progressively added)
    while (nodes.length) {
        // The nodes at the current depth/row
        const row = nodes.length;

        // For all nodes at this depth/row
        // Take the node from the front of the list
        // Add its child nodes to the end of the list
        for (let i = 0; i < row; i++) {
            const node = nodes.shift();

            if (node.left) nodes.push(node.left);
            if (node.right) nodes.push(node.right);
        }

        // Increase depth
        depth++;
    }

    return depth;
}

const tests = [
    {
        params: {
            root: arrayToTree([])
        },
        output: 0
    },
    {
        params: {
            root: arrayToTree([1])
        },
        output: 1
    },
    {
        params: {
            root: arrayToTree([1,null,2])
        },
        output: 2
    },
    {
        params: {
            root: arrayToTree([3,9,20,null,null,15,7])
        },
        output: 3
    }
];

runTests(tests, maxDepthRecursive);
runTests(tests, maxDepthIterative);