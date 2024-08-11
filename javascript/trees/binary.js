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
    let current = 1;

    while (current < arr.length) {
        const node = nodes[currentNode];
        
        // add left child node
        if (arr[current]) {
            node.left = new TreeNode(arr[current]);
            nodes.push(node.left);
        }
        current += 1;
                
        // add right child node
        if (current < arr.length && arr[current]) {
            node.right = new TreeNode(arr[current]);
            nodes.push(node.right);
        }
        current += 1;

        // move to next node in tree (BFS)
        currentNode += 1;
    }

    return root;
}


module.exports = {
    TreeNode,
    arrayToTree
};