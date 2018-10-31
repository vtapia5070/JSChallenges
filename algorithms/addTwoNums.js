// addTwoNums
/*
You are given two non - empty linked lists representing two non - negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var createLinkedListFromString = function (str) {
    let currentIndex = str.length - 1;
    let currentNode;

    while (currentIndex >= 0) {
        let val = parseInt(str[currentIndex]);
        newNode = new ListNode(val);
        if (currentIndex < str.length - 1) {
            newNode.next = currentNode;
        }
        currentNode = newNode;
        currentIndex--;
    }

    return currentNode;
};

var getOrderedNum = function (node) {
    if (node.next === null) {
        return node.val;
    }
    return getOrderedNum(node.next) + '' + node.val;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    const l1Num = parseInt(getOrderedNum(l1)); // 102
    const l2Num = parseInt(getOrderedNum(l2)); // 213

    const sum = l1Num + l2Num; // 315

    const strSum = sum.toString();
    const strSumReversed = strSum.split('').reverse().join('');

    return createLinkedListFromString(strSumReversed);
};

// test case:
var list1 = createLinkedListFromString('201'); // l1: 2 -> 0 -> 1 = 102
var list2 = createLinkedListFromString('312'); // l2: 3 -> 1 -> 2 = 213

addTwoNumbers(list1, list2); 
// ListNode {val: 5, next: ListNode}
    // next: ListNode
        // next: ListNode
        // next: null
        // val: 3
        // __proto__: Object
    // val: 1
    // __proto__: Object
// val: 5
// __proto__: Object


// Output: array of numbers
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {Array}
 */
var addTwoNumbersArray = function (l1, l2) {

    const l1Num = parseInt(getOrderedNum(l1)); // 102
    const l2Num = parseInt(getOrderedNum(l2)); // 213

    let sum = l1Num + l2Num; // 315

    sum = sum.toString().split('').reverse();

    sum.map((str, index) => {
        sum[index] = parseInt(str);
    });

    return sum;

};
