const { runTests } = require("./test/runners");

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

const arrayToList = (arr) => {
    const dummy = new ListNode();
    let current = dummy;

    for (const val of arr) {
        current.next = new ListNode(val)
        current = current.next
    }

    return dummy.next
}

const listToArray = (list) => {
    const result = [];
    let current = list

    while (current) {
        result.push(current.val)
        current = current.next
    }

    return result;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    const sorted = new ListNode;
    let current = sorted;
    
    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2;
            list2 = list2.next;
        } else {
            current.next = list1;
            list1 = list1.next;
        }

        current = current.next;
    }

    current.next = list1 || list2;

    return sorted.next;
};

const mergeTwoListsRecursive = (list1, list2) => {
    if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }

    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
    }

    list1.next = mergeTwoListsRecursive(list1.next, list2);

    return list1;
};


const tests = [
    {
        params: {
            list1: arrayToList([1,2,4]),
            list2: arrayToList([1,3,4])
        },
        output: [1,1,2,3,4,4]
    },
    {
        params: {
            list1: arrayToList([]),
            list2: arrayToList([])
        },
        output: []
    },
    {
        params: {
            list1: arrayToList([]),
            list2: arrayToList([0])
        },
        output: [0]
    }
];

runTests(tests, mergeTwoLists, listToArray);

// Does not work, list head points to itself for some reason
// runTests(tests, mergeTwoListsRecursive, listToArray);
