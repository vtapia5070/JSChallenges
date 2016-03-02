/*
Create a Stack Data structure in prototypal instantiation.
*/

var Stack = function () {
 var obj = Object.create(StackMethods);
 obj._size = 0;
 obj._storage = {};
 return obj;
};

var StackMethods = {

  size: function () {
    return this._size;
  },

  push: function (value) {
    this._storage[this._size] = value;
    this._size++;
  },
  
  pop: function () {
    if (this._size > 0) {
      delete this._storage[this._size];
      this._size--;
    }
  }

};