/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function arrayToList(arr) {
    const dummy = new ListNode();
    let current = dummy;

    for (const val of arr) {
        current.next = new ListNode(val)
        current = current.next
    }

    return dummy.next
}

function listToArray(list) {
    const result = [];
    let current = list

    while (current) {
        result.push(current.val)
        current = current.next
    }

    return result;
}


module.exports = {
    ListNode,
    arrayToList,
    listToArray
};