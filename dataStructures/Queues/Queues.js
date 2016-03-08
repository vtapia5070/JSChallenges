/*
Create a Queue Data structure in pseudoclassical instantiation.
*/

var Queue = function () {
  this._front = 0;
  this._back = 0;
  this._storage = {};
};

Queue.prototype.size: function () {
  return this._back - this._front;
};

Queue.prototype.enqueue: function (value) {
  this._back++;
  this._storage[this._back] = value;
};

Queue.prototype.dequeue: function () {
  var front = this._storage[this._front];
  delete this._storage[this._front];
  this._front++;
  return front;
};

