/*
Create a linked-list data structure with psuedoclassical instantiation.
*/
class Node {
  constructor (val) {
    return {
      value: val,
      next: null,
    }
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add (val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  remove (val) {
    if (this.length === 0) {
      return false;
    }

    let previousNode = this.head;

    if (this.head.value === val) {
      this.head = this.head.next;
      return true;
    }


    while (previousNode.next !== null) {
      if (previousNode.next.value === val) {
        previousNode.next = previousNode.next.next;
        this.length--;
        return true;
      } else {
        previousNode = previousNode.next;
      }
    }

    return false;
  }

  clear () {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  hasValue (val) {
    if (this.length === 0) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === val) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

}

const Numbers = new LinkedList();
Numbers.add(1); 
/*
head: {value: 1, next: null}
length: 1
tail: {value: 1, next: null}
*/
Numbers.add(2);
Numbers.add(3);
Numbers.remove(2);
/*
head:
  next: {value: 3, next: null}
value: 1
length: 2
tail: {value: 3, next: null}
*/