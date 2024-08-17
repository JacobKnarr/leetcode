const { runTests } = require("./test/runners");
const {
    TreeNode,
    traversals,
    treeToArray
} = require("./trees/binary");

/**
 * @param {TreeNode} root Tree root
 * @return {boolean} True if children trees are symmetric, otherwise false
 */
function sortedArrayToBST(nums) {
    if (!nums || !nums.length) return null;

    // Start by assigning root as middle (floor) of array
    // Recursively split array in half
    // Assign left child to BFS'd left half of array
    // Assign right child to BFS'd right half of array

    const middle = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[middle]);

    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));

    return root;
};


const tests = [
    {
        params: {
            input: []
        },
        output: []
    },
    {
        params: {
            input: [1]
        },
        output: [1]
    },
    {
        params: {
            input: [1,3]
        },
        output: [3,1]
    },
    {
        params: {
            input: [-10,-3,0,5,9]
        },
        output: [0,-3,9,-10,null,5]
    }
];

runTests(tests, sortedArrayToBST, treeToArray.bind(null, traversals.BFS));