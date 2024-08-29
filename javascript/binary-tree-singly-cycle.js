const { runTests } = require("./test/runners");
const {
    ListNode,
    arrayToList,
    addCycle
} = require("./linked-lists/singly-linked");

/**
 * Given the head of a sorted linked list, determine if it contains a cycle.
 * https://leetcode.com/problems/linked-list-cycle/description/
 * 
 * @param {ListNode} head The head of the sorted linked list
 * @return {boolean} True if the list contains a cycle, false otherwise
 */
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next.next;

    while (fast && fast.next) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};


const tests = [
    {
        params: {
            head: arrayToList([])
        },
        output: false
    },
    {
        params: {
            head: arrayToList([1])
        },
        output: false
    },
    {
        params: {
            head: arrayToList([1,2,3])
        },
        output: false
    },
    {
        params: {
            head: addCycle(arrayToList([1,2]), 0)
        },
        output: true
    },
    {
        params: {
            head: addCycle(arrayToList([3,2,0,-4]), 1)
        },
        output: true
    },
    {
        params: {
            head: addCycle(arrayToList([1]), -1)
        },
        output: false
    }
];

runTests(tests, hasCycle);
