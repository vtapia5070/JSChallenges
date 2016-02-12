/* Write a function that accepts a singly linked list and returns a
* reversed version of the original linked list "in place" (i.e. without
* creating a second linked list in memory).

* I:  A -> B -> C
* O: C -> B -> A

  I: {v:1, n: {v: 2, n: {v: 3, n: null}}}
  O: { v: 3, n: {v: 2, n: {v:1, n: null}}}
  
  Constraints:
    - in place
    - no extra linked lists (objs)
    - linear time complexity
  
  Edge cases:
    - 

* var nodeA = Node('A');
* var nodeB = nodeA.next = Node('B');
* var nodeC = nodeB.next = Node('C');
* reverseLinkedList(nodeA) => nodeC
* nodeC.next => nodeB ... etc.
*/

// Helper function to generate nodes
var Node = function(value){
  return { 
    value: value,
    next: null
  };
};