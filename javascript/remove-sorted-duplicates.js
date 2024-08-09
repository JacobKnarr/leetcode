const { runTests } = require("./test/runners");
const {
    ListNode,
    arrayToList,
    listToArray
} = require("./linked-lists/singly-linked");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    let current = head;
    let next = head.next;

    while (next) {
        if (current.val === next.val) {
            current.next = next.next;
        } else {
            current = current.next;
        }

        next = next.next;
    }

    return head;
};


const tests = [
    {
        params: {
            head: arrayToList([])
        },
        output: []
    },
    {
        params: {
            head: arrayToList([1,1,2])
        },
        output: [1,2]
    },
    {
        params: {
            head: arrayToList([1,1,2,3,3])
        },
        output: [1,2,3]
    }
];

runTests(tests, deleteDuplicates, listToArray);
