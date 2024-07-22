/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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

const mergeTwoListsRecusive = (list1, list2) => {
    if (!list1 || !list2) {
        return list1 ? list1 : list2;
    }

    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
    }

    list1.next = mergeTwoLists(list1.next, list2);

    return list1;   
};

function runTests() {
    const tests = [
        {
            list1: [1,2,4],
            list2: [1,3,4],
            output: [1,1,2,3,4,4]
        },
        {
            list1: [],
            list2: [],
            output: []
        },
        {
            list1: [],
            list2: [0],
            output: [0]
        }
    ];


    for (const test of tests) {
        const list1 = arrayToList(test.list1);
        const list2 = arrayToList(test.list2);
        const output = mergeTwoLists(list1, list2);
        const outputArray = listToArray(output);

        
        if (outputArray.length !== test.output.length) {
            console.log("failure");
            continue;
        }

        let result = true;

        for (let i = 0; i < outputArray.length; i++) {
            if (outputArray[i] !== test.output[i]) {
                result = false;
                break;
            }
        }

        console.log(result ? "success" : "failure");
    }
}

runTests();