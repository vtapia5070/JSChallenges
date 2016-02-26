/*
Create a linked-list data structure with psuedoclassical instantiation.
*/

var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (val) {
  if (this.head === null) {
    this.head = Node(val);
    this.tail = this.head;
  } else if (this.head === this.tail) {
    this.head.next = Node(val);
    this.tail = this.head.next;
  } else {
    this.tail.next = Node(val);
    this.tail = this.tail.next;
  }
};

// check if linked list contains val
LinkedList.prototype.contains = function (val, node) {
  if (!node) node = this.head;
  if (node.value === val) {
    return true;
  } else if (node.next) {
    return this.contains(val, node.next);
  } else {
    return false;
  }
};

LinkedList.prototype.removeHead = function () {
  // code that removes head from linked list
  if (this.tail) {
    var node = this.head.next;
    delete this.head;
    this.head = node;
  }
};

// Helper function to generate nodes
var Node = function(value){
  return { 
    value: value,
    next: null
  };
};

var List = new LinkedList();
var A = List.addToTail("A");
// console.log(List);
/*
{ head: { value: 'A', next: null },
  tail: { value: 'A', next: null } }
*/
var B = List.addToTail("B");
// console.log(List);
/*
{ head: { value: 'A', next: { value: 'B', next: null } },
  tail: { value: 'B', next: null } }
*/
var C = List.addToTail("C");
// console.log(List);
/*
{ head: { value: 'A', next: { value: 'B', next: [Object] } },
  tail: { value: 'C', next: null } }
*/
// console.log(List.contains("Z"));
