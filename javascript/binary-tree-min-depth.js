const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * @param {TreeNode} root Tree root
 * @return {number} The minimum depth of the tree
 */
function minDepthRecursive(root) {
    // Leaf child
    if (!root) return 0;
    // Leaf
    if (!root.left && !root.right) return 1;
    // Traverse right
    if (!root.left) return 1 + minDepthRecursive(root.right);
    // Traverse left
    if (!root.right) return 1 + minDepthRecursive(root.left);

    // Min between left and right
    return 1 + Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right));
};

/**
 * @param {TreeNode} root Tree root
 * @return {number} The minimum depth of the tree
 */
function minDepthIterative(root) {
    if (!root) return 0;

    const nodes = [[root, 1]];

    // Walk through nodes (progressively added)
    // Take the node from the front of the list
    // If it is a leaf node, return its depth
    // Add its child nodes to the end of the list
    while (nodes.length) {
        const [node, depth] = nodes.shift();

        if (!node.left && !node.right) return depth;
        
        if (node.left) nodes.push([node.left, depth + 1]);
        if (node.right) nodes.push([node.right, depth + 1]);
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
        output: 2
    },
    {
        params: {
            root: arrayToTree([2,null,3,null,4,null,5,null,6])
        },
        output: 5
    }
];

runTests(tests, minDepthRecursive);
runTests(tests, minDepthIterative);