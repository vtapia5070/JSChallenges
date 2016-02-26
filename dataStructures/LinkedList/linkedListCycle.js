/*
Given a linked list, determine if it has a cycle in it.

Analysis

If we have 2 pointers - fast and slow. It is guaranteed that the fast one will meet the slow one if there exists a circle.

The problem can be demonstrated in the following diagram:
linked-list-cycle

http://www.programcreek.com/2012/12/leetcode-linked-list-cycle/
*/

var Node = function(value) {
  return { value: value,
            next: null 
          };
}

function linkedListCycle (node) {
  var fast = node;
  var slow = node;
  var active = false;
  
  while (fast !== slow) {
    if (active) {
      slow = slow.next;
    } 
    fast = fast.next;
    active ? active = false : active = true;
    if (!fast) {
      return false;
    }
  }
  return true;
}

/*
TODO:
Optimize solution
Cover edge cases:
  - if input is a linked list with one or two nodes
*/
