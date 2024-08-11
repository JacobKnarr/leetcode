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


/**
 * @param {number[]} array
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


module.exports = {
    TreeNode,
    arrayToTree
};