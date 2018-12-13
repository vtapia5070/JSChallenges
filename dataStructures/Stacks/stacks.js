/*
Create a Stack Data structure with an object storage data type.
*/

class Stack {
  constructor () {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  Push (val) {
    const size = this.Size();
    let loc;
    if (size === 0) {
      this.front++;
      loc = this.front;
      this.back = this.front;
    } else {
      this.back++;
      loc = this.back;
    }

    this.storage[loc] = val;
    return val;
  }

  Pop () {
    if (this.back === 0) {
      return false;
    }

    const val = this.storage[this.back];
    delete this.storage[this.back];
    this.back--;
    return val;
  }

  Size () {
    return this.back;
  }

  Peak () {
    return this.storage[this.back];
  }

}

const Numbers = new Stack();
Numbers.Push(1);
Numbers.Push(2);
Numbers.Push(3);
Numbers.Size(); // 3
Numbers.Pop();
Numbers.Size(); // 2


