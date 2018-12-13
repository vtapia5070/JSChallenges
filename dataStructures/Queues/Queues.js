/*
Create a Queue Data structure in pseudoclassical instantiation.
*/

class Queue {
  constructor () {
    this.front = 0;
    this.back = 0;
    this.storage = [];
  }

  enqueue (val) {
    console.log(this);
    this.storage.push(val);
    this.back = this.storage.length - 1;
    return true;
  }

  dequeue () {
    if (this.back === 0) {
      return false;
    }
    const val = this.storage.pop();
    this.back--;
    return val;
  }

  size () {
    return this.storage.length;
  }
}

const Numbers = new Queue();
Numbers.enqueue(1);
Numbers.enqueue(2);
Numbers.enqueue(3);
Numbers.size(); // 3
Numbers.dequeue();
Numbers.size(); // 2