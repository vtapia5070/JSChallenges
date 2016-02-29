/*
Create a hash table 
*/
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
    // index variable
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    // check if storage index has any buckets yet
    if (storage[index].length) {
      // loop through storage
      for (var i = 0; i < storage[index].length; i++) {
        // check if key-value already exists or if there is an undefined bucket
        if (storage[index][i][0] === key || storage[index][i] === undefined) {
          // reassign storage[index] bucket's key-value
          storage[index][i] = [key, value];
        } else {
          // otherwise, add another key-value bucket to index
          storage[index].push([key, value]);
        }
      }
    } else { 
      // if storage[index] does not have any buckets create one
      storage[index] = [[key, value]];
    }
  };

  result.retrieve = function (key) {
    // index variable
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    // loop through storage of index
    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        return storage[index][i][1];
      }
    }
    return undefined;
  };
  
  result.remove = function (key) {
    // index variable
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    // loop through storage of index
    for (var i = 0; i < storage[index].length; i++) {
      // find the key value
      if (storage[index][i][0] === key) {
        //  delete the key value bucket which going to leave undefined
        delete storage[index][i];
        size--;
      }
    }
  };
};
var myTable = new hashTable();
