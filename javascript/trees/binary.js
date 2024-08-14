/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode  {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

// ENUM for the different traversal types
const traversals = Object.freeze({
    BFS: {
        traverse: traverseBFS
    },
    PREORDER: {
        traverse: traversePreorder
    },
    INORDER: {
        traverse: traverseInorder
    },
    POSTORDER: {
        traverse: traversePostorder
    }
});


/**
 * @param {number[]} arr The array representation of the tree
 * @return {TreeNode} root
 */
function arrayToTree(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const nodes = [root];

    let currentNode = 0;

    for (let i = 1; i < arr.length; i++) {
        const node = nodes[currentNode];
        let child = "left";

        // right child node
        if (i % 2 === 0) {
            child = "right";

            // move to next node in tree (BFS)
            currentNode += 1;
        }
        
        // right child node
        if (arr[i]) {
            node[child] = new TreeNode(arr[i]);
            nodes.push(node[child]);
        }
    }

    return root;
}

/**
 * @param {Enumerator} traversal The tree traversal method
 * @param {TreeNode} root The tree root
 * @return {number[]} The array representation of the tree
 */
function treeToArray(traversal, root) {
    const treeArray = [];

    if (!traversal) {
        traversal = traversals.BFS;
    }

    traversal.traverse(root, treeArray);

    return treeArray;
}

/**
 * TODO: Need to implement BFS traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
function traverseBFS(node, treeArray) {
    if (!node) return;

    treeArray.push(node.val);
    traverseBFS(node.left, treeArray);
    traverseBFS(node.right, treeArray);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function traversePreorder(node, treeArray) {
    if (!node) return;

    treeArray.push(node.val);
    traversePreorder(node.left, treeArray);
    traversePreorder(node.right, treeArray);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function traverseInorder(node, treeArray) {
    if (!node) return;

    traverseInorder(node.left, treeArray);
    treeArray.push(node.val);
    traverseInorder(node.right, treeArray);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function traversePostorder(node, treeArray) {
    if (!node) return;

    traversePostorder(node.left, treeArray);
    traversePostorder(node.right, treeArray);
    treeArray.push(node.val);
}

module.exports = {
    TreeNode,
    traversals,
    arrayToTree,
    treeToArray
};