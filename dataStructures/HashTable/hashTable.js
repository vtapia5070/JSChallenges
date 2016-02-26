/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(key, storageLimit){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function (key, value) {
    // create index variable
    // check if size is 3/4th of storage
      // if it is: 
        // pass double storage limit = storage times 2 into resize
    
    // increment size
    // set index to equal getIndexBelowMaxForKey with the key argument and max
      // loop throught storage[index], 
        // if iteration's zero index is equal to key reassign value
        // if iterations value is undefined reassign [key, value]
        
      // otherwise push [key, value] into storage of index
  };

  
  result.retrieve = function (key) {
    // index variable
    // assign index to getIndexBelowMaxForKey with the key argument and max
    // loop through storage of index
      // check if each iteration's zero index (key) is equal to key
        // if it is: return value
    
    // else return undefined
  };
  
  result.remove = function (key) {
    // index variable
    // assign index to getIndexBelowMaxForKey with the key argument and max
    // loop through storage of index
      // find the key value
        //  delete the key value bucket which going to leave undefined
      // decrement the size
      // check storage limit and resize if necessary
        // if the size if < 3/4th of the storage 
          // call resize with new size
  };
  
  function resize(newSize){
    // reassign storage to newSize
     return result;
  }
  
  
};