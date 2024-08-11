const { runTests } = require("./test/runners");
const {
    TreeNode,
    arrayToTree
} = require("./trees/binary");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const inorderTreeArray = [];
    
    inorderTraversalHelper(root, inorderTreeArray);
    
    return inorderTreeArray;
};

function inorderTraversalHelper(node, inorderTreeArray) {
    if (!node) return;

    inorderTraversalHelper(node.left, inorderTreeArray);

    inorderTreeArray.push(node.val);

    inorderTraversalHelper(node.right, inorderTreeArray);
}


const tests = [
    {
        params: {
            head: arrayToTree([])
        },
        output: []
    },
    {
        params: {
            head: arrayToTree([1])
        },
        output: [1]
    },
    {
        params: {
            head: arrayToTree([1,null,2,3])
        },
        output: [1,3,2]
    },
    {
        params: {
            root: arrayToTree([5,4,7,3,null,2,null,-1,null,9])
        },
        output: [-1,3,4,5,9,2,7]
    },
    {
        params: {
            root: arrayToTree([1,2,3,4,5,6])
        },
        output: [4,2,5,1,6,3]
    }
];

runTests(tests, inorderTraversal);